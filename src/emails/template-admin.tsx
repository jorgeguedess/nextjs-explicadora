import { formatNumberCell } from "@/lib/utils";
import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Heading,
} from "@react-email/components";
import * as React from "react";

interface TemplateAdminEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const TemplateAdminEmail = ({
  name,
  email,
  phone,
  message,
}: TemplateAdminEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Notificação de contato site Explicadora Tia Denise</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Heading as="h2">Notificação de Contato</Heading>
          </Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>
              Olá <strong>Denise!</strong>
            </Text>
            <Text style={paragraph}>
              Você recebeu uma nova mensagem de contato através do site:{" "}
              <Link
                href="https://explicadoratiadenise.com.br/"
                target="_blank"
                style={link}
              >
                https://explicadoratiadenise.com.br/
              </Link>
            </Text>

            <Link
              href={`https://wa.me/${formatNumberCell(phone)}`}
              style={contactLinkStyles}
            >
              Entre em contato com o cliente
            </Link>

            <ul style={infoMenu}>
              <li style={info}>
                <strong>Nome:</strong> {name}
              </li>
              <li style={info}>
                <strong>E-mail:</strong> {email}
              </li>
              <li style={info}>
                <strong>Telefone:</strong> {phone}
              </li>
              <li style={info}>
                <strong>Mensagem:</strong> {message}
              </li>
            </ul>

            <Text style={paragraph}>
              Por favor, responda à mensagem o mais breve possível.
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Row>
            <Text style={{ textAlign: "center", color: "#706a7b" }}>
              Copyright © 2024 By Jorge Guedes
            </Text>
          </Row>
        </Section>
      </Body>
    </Html>
  );
};

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  maxWidth: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
};

const footer = {
  maxWidth: "580px",
  margin: "0 auto",
};

const link = {
  textDecoration: "underline",
  color: "#1b7e40",
};

const content = {
  padding: "5px 20px 20px 20px",
};

const logo = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  padding: 30,
};

const sectionsBorders = {
  width: "100%",
  display: "flex",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "1px solid hsl(220,100%,46%)",
  width: "102px",
};

const contactLinkStyles = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  gap: "8px",
  marginBottom: "20px",
  width: "fit-content",
  padding: "10px 20px",
  backgroundColor: "#1b7e40",
  color: "#ffffff",
  textDecoration: "none",
  borderRadius: "5px",
  fontSize: "16px",
  transition: "background-color 0.3s ease",
};

const icon = {
  width: "16px",
  height: "16px",
};

const infoMenu = {
  listStyle: "none",
  padding: "0px",
  margin: "0px",
  marginBottom: "32px",
};

const info = {
  listStyle: "none",
  padding: "0px",
  margin: "0px",
  marginBottom: "4px",
};
