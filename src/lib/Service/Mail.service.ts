import nodemailer from "nodemailer";
import { ContactProps } from "@/interfaces/contact";
import { formatNumberCell } from "@/lib/utils";

import { TemplateEmailUser } from "@/emails/template-user";
import { TemplateEmailAdmin } from "@/emails/template-admin";

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

export const SendEmail = async ({ name, email }: ContactProps) => {
  const info = await transporter.sendMail({
    from: host || "user@gmail.com",
    to: email,
    subject:
      "Mensagem Recebida! - Aula de Reforço com a Explicadora Tia Denise",
    html: TemplateEmailUser.replace("{{name}}", name),
  });
  return info;
};

export const SendEmailAdmin = async ({
  name,
  email,
  phone,
  message,
}: ContactProps) => {
  const info = await transporter.sendMail({
    from: host || "user@gmail.com",
    to: process.env.EMAIL_USER_OPTIONAL,
    subject:
      "Mensagem Recebida! - Aula de Reforço com a Explicadora Tia Denise",
    html: TemplateEmailAdmin.replace("{{name}}", name)
      .replace("{{email}}", email)
      .replace("{{phone}}", phone ?? "")
      .replace("{{link}}", phone ? formatNumberCell(phone) : "")
      .replace("{{message}}", message),
  });

  return info;
};
