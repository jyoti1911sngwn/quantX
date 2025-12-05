import { success } from "better-auth";
import { inngest } from "./client";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./prompts";

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

    });
    return {
        success: true,
        message : 'Welcome email sent successfully'
    }
  }
);
