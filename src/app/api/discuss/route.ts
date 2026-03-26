import { NextResponse } from 'next/server';
import connectDB from '@/components/lib/mongodb';
import Message from '@/components/model/message';
import mongoose from 'mongoose';

export async function POST(req: any) {
  try {
    await connectDB();
    const { fname, lname, email, contact, company, role, product, project } = await req.json();
    await Message.create({ fname, lname, email, contact, company, role, product, project });

    return NextResponse.json({ msg: ['Message sent successfully'], success: true });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = Object.keys(error.errors);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json(error);
    }
  }
}
