import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const response = await axios.post(
      "https://script.google.com/macros/s/AKfycbxlv0jQahvbIzKGN0_o6ljNwDoY5aMC5-zQM9OTjPJJlfyaR7-Lnf5r2Au0d7N_HZ1N/exec",
      payload,
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
