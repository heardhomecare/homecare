import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import JobApplication from '@/models/JobApplication';
import { getServerSession } from 'next-auth';

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const applications = await JobApplication.find({}).sort({ createdAt: -1 });

    return NextResponse.json(applications);
  } catch (error: any) {
    console.error('Fetch Applications Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    await JobApplication.deleteMany({});

    return NextResponse.json({ message: 'All applications cleared successfully' });
  } catch (error: any) {
    console.error('Clear Applications Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}
