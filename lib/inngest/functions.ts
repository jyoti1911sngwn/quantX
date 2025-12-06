import { inngest } from "./client";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./prompts";
import { sendWelcomeEmail } from "../nodemailer";
import { getAllUsersForNewsEmail } from "../actions/user.actions";
import { getWatchlistSymbolsByEmail } from "../actions/watchlist.actions";
import { getNews } from "../actions/finnhub.actions";

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
     const introText = (part && 'text' in part ? part.text : "Welcome to our platform!") || 'Thank you for signing up.';

     // Sending email logic here (e.g., using an nodemailer service)
     const {data: {email , name}} = event;
      return await sendWelcomeEmail({
        email, name, intro : introText
      })
    });
    return {
        success: true,
        message : 'Welcome email sent successfully'
    }
  }
);


export const sendDailyNewsSummary = inngest.createFunction(
  { id: "daily-news-summary" },
  [{ event: "app/daily.news" }, { cron: '0 12 * * *' }],
  async ({ step }) => {
    try {
      // Step 1: Get all users for news delivery
      const users = await step.run("get-all-users", async () => {
        return await getAllUsersForNewsEmail();
      });

      if (!users || users.length === 0) {
        return { success: false, message: 'No users found for news email' };
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
            const articles = await getNews(symbols.length > 0 ? symbols : undefined);

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

      // Step 3: Summarize news via AI (placeholder)
      const summaries = await step.run("summarize-news", async () => {
        const summaryResults: Record<
          string,
          {
            email: string;
            summary: string;
          }
        > = {};

        for (const [userId, data] of Object.entries(newsPerUser)) {
          if (data.articles.length === 0) {
            summaryResults[userId] = {
              email: data.email,
              summary: "No news available for your watchlist today.",
            };
            continue;
          }

          try {
            // Placeholder: In production, use AI to summarize
            const headings = data.articles
              .map((a, i) => `${i + 1}. ${a.headline}`)
              .join('\n');

            const summary = `Here are today's top stories:\n\n${headings}\n\nCheck the full articles for more details.`;

            summaryResults[userId] = {
              email: data.email,
              summary,
            };
          } catch (error) {
            console.error(`Error summarizing news for user ${userId}:`, error);
            summaryResults[userId] = {
              email: data.email,
              summary: "We encountered an issue processing your news summary.",
            };
          }
        }

        return summaryResults;
      });

      // Step 4: Send emails (placeholder)
      const emailResults = await step.run("send-emails", async () => {
        const results = [];

        for (const [userId, data] of Object.entries(summaries)) {
          try {
            // Placeholder: Send email using your email service
            // await sendDailyNewsEmail({
            //   email: data.email,
            //   summary: data.summary,
            // });

            console.log(`Email sent to ${data.email}`);
            results.push({ userId, email: data.email, sent: true });
          } catch (error) {
            console.error(`Error sending email to ${data.email}:`, error);
            results.push({ userId, email: data.email, sent: false });
          }
        }

        return results;
      });

      return {
        success: true,
        message: 'Daily news summary emails processed',
        usersProcessed: users.length,
        emailsSent: emailResults.filter((r) => r.sent).length,
      };
    } catch (error) {
      console.error('Error in sendDailyNewsSummary:', error);
      return {
        success: false,
        message: 'Failed to send daily news summary',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
);