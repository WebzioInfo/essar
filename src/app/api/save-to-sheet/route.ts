export async function POST(req: Request) {
  try {
    console.log("📌 API HIT: /api/save-to-sheet");

    const body = await req.json();
    console.log("📥 Received body:", body);

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    console.log("🔗 Script URL:", scriptUrl);

    if (!scriptUrl) {
      throw new Error("❌ GOOGLE_SCRIPT_URL missing in .env.local");
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("📡 Response Status:", response.status);

    const text = await response.text();
    console.log("📡 Raw Response:", text);

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      result = text;
    }

    return Response.json({ success: true, data: result });

  } catch (error: unknown) {
  console.error("Error saving to Google Sheet:", error);
  return Response.json({ success: false }, { status: 500 });
}
}
