import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/mongodb';
import JobListing from '@/models/JobListing';

export const dynamic = 'force-dynamic';

// GET all jobs
export async function GET() {
  try {
    await dbConnect();
    const jobs = await JobListing.find({}).sort({ createdAt: -1 });
    return NextResponse.json(jobs);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// POST new job
export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const body = await req.json();
    const job = await JobListing.create(body);
    return NextResponse.json(job, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
