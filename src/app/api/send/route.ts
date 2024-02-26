import { ContactProps } from "@/interfaces/contact";
import { SendEmailUser, SendEmailAdmin } from "@/lib/Service/Mail.service";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const data = (await request.json()) as ContactProps;
  const { name, email, message, phone } = data;

  if (!email || !name || !message) {
    return NextResponse.json(
      {
        msg: null,
        error: "Não foi possível enviar o Email, dados incompletos.",
      },
      {
        status: 400,
      },
    );
  }

  try {
    await SendEmailUser({
      name,
      email,
    });

    await SendEmailAdmin({
      name,
      email,
      phone,
      message,
    });

    const response = NextResponse.json(
      {
        error: null,
        msg: "Email Enviado com sucesso!",
      },
      {
        status: 200,
      },
    );
    return response;
  } catch (error) {
    return NextResponse.json(
      {
        msg: null,
        error: "Ocorreu um erro ao enviar o email.",
      },
      {
        status: 500,
      },
    );
  }
};
