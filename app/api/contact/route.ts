import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { sendContactEmail, sendAutoReplyEmail } from '@/lib/mail';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, city, source, message, textOptIn } = body;

    if (!name || !email || !phone || !city || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status:400 }
      );
    }

    await dbConnect();

    const contact = await Contact.create({
      name,
      email,
      phone,
      city,
      source,
      message,
      textOptIn,
    });

    // Send notification email to team
    await sendContactEmail(body);

    // Send auto-reply to user
    await sendAutoReplyEmail(body);

    return NextResponse.json(
      { message: 'Message sent successfully', id: contact._id },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}
