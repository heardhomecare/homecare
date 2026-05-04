import { NextResponse } from 'next/server';
import { sendJobApplicationEmail } from '@/lib/mail';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, jobTitle, experience, message } = body;

    if (!name || !email || !phone || !jobTitle) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a real app, you would also save to a DB model like 'Application'
    // await dbConnect();
    // await Application.create(body);

    // Send notification email
    await sendJobApplicationEmail(body);

    return NextResponse.json(
      { message: 'Application submitted successfully' },
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
