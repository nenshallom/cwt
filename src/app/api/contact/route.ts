import { NextRequest, NextResponse } from "next/server";
import { sendMessage } from "@/config/nodemailer";
import { FormData } from "@/components/actions/contact";

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as FormData;

    console.log(data);

    const result = await sendMessage(data);

    return NextResponse.json(
      { message: result },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Failed to send message: Unknown error occurred" },
      { status: 400 }
    );
  }
}
