import { NextResponse } from "next/server";
import axios from "axios";

const SHEET_ENDPOINT = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const firstName = typeof payload.firstName === "string" ? payload.firstName.trim() : "";
    const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
    const projectDetails = typeof payload.projectDetails === "string" ? payload.projectDetails.trim() : "";

    if (!firstName || !phone || !projectDetails) {
      return NextResponse.json(
        { status: "error", message: "First name, phone, and project details are required." },
        { status: 400 }
      );
    }

    if (!SHEET_ENDPOINT) {
      console.warn("GOOGLE_SHEETS_WEBHOOK_URL is not configured; consultation lead accepted but not forwarded.");
      return NextResponse.json({
        status: "ok",
        message: "Lead received. Configure GOOGLE_SHEETS_WEBHOOK_URL to forward leads.",
      });
    }

    const response = await axios.post(
      SHEET_ENDPOINT,
      {
        ...payload,
        firstName,
        phone,
        projectDetails,
      },
      {
        headers: { "Content-Type": "application/json" },
        timeout: 15000,
      }
    );

    return NextResponse.json(response.data);

  } catch (error: unknown) {
    let message = "Google Sheet upload failed";

    if (axios.isAxiosError(error)) {
      message = error.response?.data?.message || error.message;
    } else if (error instanceof Error) {
      message = error.message;
    }

    console.error("API Proxy Error:", message);

    return NextResponse.json(
      { status: "error", message },
      { status: 500 }
    );
  }
}
