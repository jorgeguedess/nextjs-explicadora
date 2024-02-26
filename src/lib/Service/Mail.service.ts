import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { ContactProps } from "@/interfaces/contact";
import { TemplateUserEmail } from "@/emails/template-user";
import { TemplateAdminEmail } from "@/emails/template-admin";

const host = process.env.EMAIL_HOST;

const transporter = nodemailer.createTransport({
  service: "gmail",
  host,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface SendEmailUserProps {
  name: string;
  email: string;
}

export const SendEmailUser = async ({ name, email }: SendEmailUserProps) => {
  const emailHtml = render(TemplateUserEmail({ name }));

  const info = await transporter.sendMail({
    from: host || "user@gmail.com",
    to: email,
    subject:
      "Mensagem Recebida! - Aula de Reforço com a Explicadora Tia Denise",
    html: emailHtml,
  });
  return info;
};

export const SendEmailAdmin = async ({
  name,
  email,
  phone,
  message,
}: ContactProps) => {
  const emailHtml = render(TemplateAdminEmail({ name, email, phone, message }));

  const info = await transporter.sendMail({
    from: host || "user@gmail.com",
    to: process.env.EMAIL_USER_OPTIONAL,
    subject:
      "Mensagem Recebida! - Aula de Reforço com a Explicadora Tia Denise",
    html: emailHtml,
  });
  return info;
};
