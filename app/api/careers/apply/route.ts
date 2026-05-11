import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import JobApplication from '@/models/JobApplication';
import { sendJobApplicationEmail, sendJobAutoReplyEmail } from '@/lib/mail';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, experience, message, jobTitle } = body;

    if (!name || !email || !phone || !experience || !message || !jobTitle) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    await dbConnect();

    // 1. Save to Database
    const application = await JobApplication.create({
      name,
      email,
      phone,
      experience,
      message,
      jobTitle,
    });

    // 2. Send Team Notification
    await sendJobApplicationEmail({
      name,
      email,
      phone,
      experience,
      message,
      jobTitle,
    });

    // 3. Send Candidate Auto-Reply
    await sendJobAutoReplyEmail({
      name,
      email,
      jobTitle,
    });

    return NextResponse.json(
      { message: 'Application submitted successfully', id: application._id },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Job Application Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}
