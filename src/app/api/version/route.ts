import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ version: "1.0.0-beta.1", downloadUrl: "https://whizly.vercel.app/" });
}
