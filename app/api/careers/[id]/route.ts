import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/mongodb';
import JobListing from '@/models/JobListing';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const body = await req.json();
    const job = await JobListing.findByIdAndUpdate(id, body, { new: true });
    
    if (!job) {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json(job);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const job = await JobListing.findByIdAndDelete(id);
    
    if (!job) {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Job deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
