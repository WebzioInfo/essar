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
    const firstName = typeof payload.firstName === "string" ? payload.firstName.trim() : "";
    const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
    const projectDetails = typeof payload.projectDetails === "string" ? payload.projectDetails.trim() : "";

    if (!firstName || !phone || !projectDetails) {
      return NextResponse.json(
        { status: "error", message: "First name, phone, and project details are required." },
        { status: 400 }
      );
    }

    const endpoint = getEndpoint();

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          firstName,
          phone,
          projectDetails,
        }),
        signal: AbortSignal.timeout(10000),
      });

      const responseText = await response.text();
      let responseData: unknown = { status: "success" };
      try {
        responseData = JSON.parse(responseText);
      } catch {
        // Text response from script
      }

      return NextResponse.json(responseData);
    } catch (forwardError) {
      // Even if Google Sheets webhook has network lag or temporary glitch,
      // log it safely on server and return success so the client's consultation
      // and WhatsApp bridge are never blocked.
      console.error("External webhook forward notice:", forwardError);
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
