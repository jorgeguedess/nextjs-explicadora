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

interface TemplateUserEmailProps {
  name?: string;
}

export const TemplateUserEmail = ({ name }: TemplateUserEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Obrigado por entrar em contato com a Explicadora Tia Denise
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Heading as="h2">Explicadora Tia Denise</Heading>
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
              Olá{" "}
              <strong style={{ textTransform: "capitalize" }}>{name}</strong>,
              tudo bem?
            </Text>
            <Text style={paragraph}>
              Sou a Tia Denise e estou aqui para ajudar com o reforço escolar
              do(a) seu filho(a).
            </Text>
            <Text style={paragraph}>
              Entrarei em contato em breve para discutir como posso ajudar
              melhor.
            </Text>
            <Text style={paragraph}>
              Enquanto isso, se precisar falar comigo rapidamente, sinta-se à
              vontade para me contatar pelo WhatsApp.
            </Text>
            <Link href="https://wa.me/5521996026504" style={contactLinkStyles}>
              Fale no Whatsapp
            </Link>
          </Section>
        </Container>
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
