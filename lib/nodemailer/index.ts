import nodemailer from 'nodemailer';
import { NEWS_SUMMARY_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from './templates';

export const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : process.env.NODEMAILER_EMAIL!,
        pass : process.env.NODEMAILER_PASSWORD!,
    }
})

export const sendWelcomeEmail = async ({email, name , intro}: WelcomeEmailData) => {
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE.replace('{{name}}', name).replace('{{intro}}', intro);
    const mailOptions = {
        from : '"Signalist" <sangwanjyoti717@gmail.com>',
        to : email,
        subject : `Welcome to Signalist, ${name}!`,
        text: 'Thank you for signing up to Signalist. We are excited to have you on board!',
        html : htmlTemplate,}

    await transporter.sendMail(mailOptions);

    }

export const emailSummaryEmail = async ({email, date, newsContent}: {email: string; date: string; newsContent: string}) : Promise<void> => {
    const htmlTemplate = NEWS_SUMMARY_EMAIL_TEMPLATE.replace('{{date}}', date).replace('{{news_content}}', newsContent);
    const mailOptions = {
        from : '"Signalist" <sangwanjyoti717@gmail.com>',
        to : email,
        subject : `Daily News Summary for ${date}`,
        text: 'Today\'s news summary from Signalist.',
        html : htmlTemplate,}

    await transporter.sendMail(mailOptions);
}
