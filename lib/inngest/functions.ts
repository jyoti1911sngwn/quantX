import { inngest } from "./client";
import {
  NEWS_SUMMARY_EMAIL_PROMPT,
  PERSONALIZED_WELCOME_EMAIL_PROMPT,
} from "./prompts";
import { emailSummaryEmail, sendWelcomeEmail } from "../nodemailer";
import { getAllUsersForNewsEmail } from "../actions/user.actions";
import { getWatchlistSymbolsByEmail } from "../actions/watchlist.actions";
import { getNews } from "../actions/finnhub.actions";
import { email } from "better-auth";

export const sendSignUpEmail = inngest.createFunction(
  { id: "sign-up-email" },
  { event: "app/user.created" },
  async ({ event, step }) => {
    const userProfile = `
        - Country : ${event.data.country}
        - Email : ${event.data.email}
        - Investment Goals : ${event.data.investmentGoals}
        - Risk Tolerance : ${event.data.riskTolerance}
        - Preferred Industry : ${event.data.preferredIndustry}
        `;

    const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace(
      "{{user_profile}}",
      userProfile
    );
    const response = await step.ai.infer("generate-welcome-intro", {
      model: step.ai.models.gemini({ model: "gemini-2.5-flash-lite" }),

      body: {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      },
    });

    await step.run("send-welcome-email", async () => {
      const part = response.candidates?.[0]?.content?.parts?.[0];
      const introText =
        (part && "text" in part ? part.text : "Welcome to our platform!") ||
        "Thank you for signing up.";

      // Sending email logic here (e.g., using an nodemailer service)
      const {
        data: { email, name },
      } = event;
      return await sendWelcomeEmail({
        email,
        name,
        intro: introText,
      });
    });
    return {
      success: true,
      message: "Welcome email sent successfully",
    };
  }
);

export const sendDailyNewsSummary = inngest.createFunction(
  { id: "daily-news-summary" },
  [{ event: "app/daily.news" }, { cron: "0 12 * * *" }],
  async ({ step }) => {
    try {
      // Step 1: Get all users for news delivery
      const users = await step.run("get-all-users", async () => {
        return await getAllUsersForNewsEmail();
      });

      if (!users || users.length === 0) {
        return { success: false, message: "No users found for news email" };
      }

      // Step 2: Fetch personalized news for each user
      const newsPerUser = await step.run("fetch-news-per-user", async () => {
        const results: Record<
          string,
          {
            email: string;
            name: string;
            articles: any[];
          }
        > = {};

        for (const user of users) {
          try {
            // Get user's watchlist symbols
            const symbols = await getWatchlistSymbolsByEmail(user.email);

            // Fetch news for symbols or general news if no symbols
            const articles = await getNews(
              symbols.length > 0 ? symbols : undefined
            );

            results[user.id] = {
              email: user.email,
              name: user.name,
              articles: articles,
            };
          } catch (error) {
            console.error(`Error fetching news for user ${user.email}:`, error);
            // Set empty articles for this user, continue with others
            results[user.id] = {
              email: user.email,
              name: user.name,
              articles: [],
            };
          }
        }

        return results;
      });

      // Step 3: Generate personalized AI news summaries for each user
      const summaries = await step.run("summarize-news", async () => {
        const summaryResults: Record<
          string,
          {
            email: string;
            name: string;
            summary: string;
          }
        > = {};

        for (const [userId, userData] of Object.entries(newsPerUser)) {
          const { email, name, articles } = userData;

          if (!articles || articles.length === 0) {
            summaryResults[userId] = {
              email,
              name,
              summary: "No relevant news found for your watchlist today.",
            };
            continue;
          }

          try {
            // Stringify only this user's articles cleanly
            const newsDataJson = JSON.stringify(articles, null, 2);

            const prompt = NEWS_SUMMARY_EMAIL_PROMPT.replace(
              "{{newsData}}",
              newsDataJson
            ).replace("{{userName}}", name || "there");

            const response = await step.ai.infer(`summarize-news-${userId}`, {
              model: step.ai.models.gemini({
                model: "gemini-1.5-flash-latest",
              }), // or gemini-2.0-flash-exp if available
              body: {
                contents: [{ role: "user", parts: [{ text: prompt }] }],
              },
            });

            const part = response.candidates?.[0]?.content?.parts?.[0];
            const summaryText =
              part && "text" in part ? part.text.trim() : null;

            summaryResults[userId] = {
              email,
              name,
              summary: summaryText || "Here's your daily finance update.",
            };
          } catch (error) {
            console.error(`AI summarization failed for user ${email}:`, error);
            summaryResults[userId] = {
              email,
              name,
              summary:
                "We couldn't generate your personalized summary today. We'll try again tomorrow!",
            };
          }
        }

        return summaryResults;
      });
      // Step 4: Send emails (placeholder)
      // Step 4: Send personalized summary emails to all users
      const emailResults = await step.run("send-emails", async () => {
        const results: Array<{
          userId: string;
          email: string;
          name: string;
          sent: boolean;
          error?: string;
        }> = [];

        // Use Object.entries to properly iterate over summaries
        const sendPromises = Object.entries(summaries).map(
          async ([userId, data]) => {
            const { email, name, summary } = data;

            // Skip if summary is empty or fallback message (optional)
            if (
              !summary ||
              summary.includes("No relevant news") ||
              summary.includes("couldn't generate")
            ) {
              console.log(
                `Skipping email for ${email} (no meaningful content)`
              );
              return {
                userId,
                email,
                name,
                sent: false,
                error: "No content to send",
              };
            }

            try {
              await emailSummaryEmail({
                email,
                name: name || "Investor",
                date: new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
                summary, // this is the AI-generated summary text
              });

              console.log(`Daily news email sent successfully to ${email}`);
              return { userId, email, name, sent: true };
            } catch (error) {
              const errMsg =
                error instanceof Error ? error.message : "Unknown email error";
              console.error(`Failed to send email to ${email}:`, errMsg);
              return { userId, email, name, sent: false, error: errMsg };
            }
          }
        );

        // Execute all email sends in parallel (fast & efficient)
        const settled = await Promise.allSettled(sendPromises);

        // Normalize results from Promise.allSettled
        for (const result of settled) {
          if (result.status === "fulfilled") {
            results.push(result.value);
          } else {
            // This shouldn't happen often, but just in case
            console.error(
              "Unexpected promise rejection in email sending:",
              result.reason
            );
            results.push({
              userId: "unknown",
              email: "unknown",
              name: "unknown",
              sent: false,
              error: "Promise rejected",
            });
          }
        }

        return results;
      });

      // Final return with useful stats
      return {
        success: true,
        message: "Daily news summary emails processed",
        usersProcessed: users.length,
        emailsAttempted: emailResults.length,
        emailsSent: emailResults.filter((r) => r.sent).length,
        emailsFailed: emailResults.filter((r) => !r.sent).length,
        failedEmails: emailResults
          .filter((r) => !r.sent)
          .map((r) => ({ email: r.email, error: r.error })),
      };
    } catch (error) {
      console.error("Error in sendDailyNewsSummary:", error);
      return {
        success: false,
        message: "Failed to send daily news summary",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }
);
