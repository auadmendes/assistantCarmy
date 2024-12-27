import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EmailRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string; // Optional
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as EmailRequestBody;

    const { firstName, lastName, email, phone, message } = body;

    // Input validation
    if (!email || !message || !firstName || !lastName) {
      return NextResponse.json(
        { message: "All fields are required except phone." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "contact@carmy.com",
      subject: `Contact Request from ${firstName} ${lastName}`,
      text: `Message from ${firstName} ${lastName}:
      Email: ${email}
      Phone: ${phone || "Not provided"}
      Message: ${message}`,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email." },
      { status: 500 }
    );
  }
}
