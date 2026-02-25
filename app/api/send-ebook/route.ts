// src/app/api/contact/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure the Nodemailer transporter using your secure environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email} = body;

    // Basic validation
    if (!email) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Email content setup
const mailOptions = {
    from: '"Thrive Together" <thrivetogetherhubb@gmail.com>',
    to: email,
    subject: '🎁 Your Free Ebook Download',
    text: `Thanks for subscribing! Download your ebook here: https://your-site.com/ebook.pdf`,
    html: `
      <h1>Thanks for subscribing!</h1>
      <p>Click the button below to grab your free copy of the ebook.</p>
      <a href="https://drive.google.com/uc?export=download&id=1YnBNOV8P_adriEw_d5ZMwYVt_4qLL-4c" download="myfile.pdf" 
         style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
         Download Ebook
      </a>
    `,
  };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Success response
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Email sending error:', error);
    // Error response
    return NextResponse.json({ 
        message: 'Failed to send email. Check server logs.',
        error: (error as Error).message,
    }, { status: 500 });
  }
}








