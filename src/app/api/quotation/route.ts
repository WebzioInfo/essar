import { NextResponse } from "next/server";

const ACTIVE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyBYW_OKNKBMBAUGJWQprieIUhRLyr-BHkzX-8ApCe-pY8S9acLolIUzo4K5kxQ1k37/exec";

function getEndpoint(): string {
  const envUrl = (process.env.GOOGLE_SHEETS_WEBHOOK_URL || "").trim().replace(/^["']|["']$/g, "");
  if (
    envUrl &&
    envUrl.startsWith("https://script.google.com") &&
    !envUrl.includes("AKfycbxlv0jQahvb")
  ) {
    return envUrl;
  }

  return ACTIVE_APPS_SCRIPT_URL;
}

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    // 1. Extract and validate required fields
    const rawName =
      (typeof payload.firstName === "string" ? payload.firstName.trim() : "") ||
      (typeof payload.name === "string" ? payload.name.trim() : "");
    const rawPhone = typeof payload.phone === "string" ? payload.phone.trim() : "";
    const cleanPhone = rawPhone.replace(/[^0-9]/g, "");

    if (!rawName || cleanPhone.length < 10) {
      return NextResponse.json(
        { status: "error", message: "Please enter your name and a valid 10-digit phone number." },
        { status: 400 }
      );
    }

    const endpoint = getEndpoint();

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15000),
      });

      const responseText = await response.text();
      let parsedData: unknown = null;
      try {
        parsedData = JSON.parse(responseText);
      } catch {
        // Response is plain text
      }

      return NextResponse.json({
        status: "success",
        data: parsedData || "ok",
      });
    } catch (forwardError) {
      console.error("Google Apps Script forwarding notice:", forwardError);
      // Fallback success so client can proceed to WhatsApp without losing the lead
      return NextResponse.json({
        status: "success",
        message: "Consultation accepted.",
      });
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    console.error("API Route Error:", message);

    return NextResponse.json(
      { status: "error", message },
      { status: 500 }
    );
  }
}
