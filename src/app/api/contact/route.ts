import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const subjects = {
  proposal: "Proposta",
  question: "Dúvida",
  other: "Outro",
};

export async function POST(req: NextRequest) {
  const { name, email, message, subject, shouldReturn } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        error: "Por favor, preencha todos os campos.",
      },
      {
        status: 400,
      }
    );
  }

  const subjectText = subjects[subject as keyof typeof subjects];

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  } as SMTPTransport.Options);

  const messageHTMl = `
<div style="font-family: Arial, sans-serif; font-size: 16px;">
    <h1 style="color: #333; font-size: 24px; font-weight: 700; margin-bottom: 20px;">Contato do <b style="color: #0070f3;">Potifolio</b></h1>
    <table style="width: 100%; margin-bottom: 20px;">
        <tr>
            <td style="width: 100px; font-weight: 700;">Nome:</td>
            <td>${name}</td>
        </tr>
        <tr>
            <td style="width: 100px; font-weight: 700;">Email:</td>
            <td>${email}</td>
        </tr>
        <tr>
            <td style="width: 100px; font-weight: 700;">Assunto:</td>
            <td>${subjectText}</td>
        </tr>
    </table>
    <div style="margin-bottom: 20px;">
        <p style="font-weight: 700;">Mensagem:</p>
        <p>${message}</p>
    </div>
    ${
      shouldReturn
        ? `
    <div style="margin-top: 20px;">
        <p style="font-weight: 700;">Responder para:</p>
        <p>${email}</p>
        </div>
    `
        : ""
    }
</div>
    `;

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `Contato do Potifolio: ${subjectText}`,
    html: messageHTMl,
  });

  return NextResponse.json({
    message: "Email enviado com sucesso",
  });
}
