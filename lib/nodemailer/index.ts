import nodemailer from 'nodemailer';
import { WELCOME_EMAIL_TEMPLATE } from './templates';

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
        from : '"Signalist" <jyotisngwn191@gmail.com>',
        to : email,
        subject : `Welcome to Signalist, ${name}!`,
        text: 'Thank you for signing up to Signalist. We are excited to have you on board!',
        html : htmlTemplate,}

    await transporter.sendMail(mailOptions);

    }