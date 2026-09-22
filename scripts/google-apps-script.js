/**
 * Essar Enterprises - Google Apps Script Webhook Handler
 * 
 * Location: Google Sheets > Extensions > Apps Script
 * 
 * Capabilities:
 * 1. Appends all website leads (Consultation Form + Quotation Engine) into Google Sheet
 * 2. Sends Instant Admin Email Alert to Essar (webzio.info@gmail.com) with WhatsApp quick-chat link
 * 3. Sends Professional Confirmation Email to the user (zero SMTP setup required!)
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var contents = e.postData.contents;
    var data = JSON.parse(contents);

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var timestamp = new Date();

    // 1. Normalize Lead Data from both Consultation & Quotation forms
    var fullName = (
      data.name ||
      ((data.firstName || "") + " " + (data.lastName || "")).trim() ||
      "Prospective Client"
    );
    var phone = data.phone || "—";
    var email = (data.email || "").trim();
    var source = data.source || "Website Form";
    var details = data.projectDetails || data.message || "—";
    var statusOrType = data.status || data.plantType || "—";
    var location = data.location || "South India";
    var budget = data.budget || "—";
    var timeline = data.projectTimeline || "—";
    var bpm = data.bpm ? data.bpm + " BPM" : "—";
    var automation = data.automation || "—";

    // 2. Append Row to Google Sheet
    sheet.appendRow([
      timestamp,
      fullName,
      phone,
      email,
      source,
      statusOrType,
      location,
      budget,
      timeline,
      bpm,
      automation,
      details
    ]);

    // 3. Email #1: Instant Alert to Essar Admin
    var essarAdminEmail = "webzio.info@gmail.com";
    var waCleanPhone = phone.replace(/[^0-9]/g, "");
    var waLink = "https://wa.me/" + (waCleanPhone.length === 10 ? "91" + waCleanPhone : waCleanPhone);

    var adminSubject = "🔥 New Lead: " + fullName + " (" + phone + ") - " + source;
    var adminHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <div style="background: #006670; color: #ffffff; padding: 24px;">
          <h2 style="margin: 0 0 6px 0; font-size: 20px; font-weight: 600;">New Consultation Request</h2>
          <p style="margin: 0; font-size: 14px; opacity: 0.9;">Essar Enterprises Website Lead Capture</p>
        </div>
        
        <div style="padding: 24px; color: #1f2937; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 140px;">Client Name:</td>
              <td style="padding: 8px 0; font-weight: 600; color: #111827;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Phone:</td>
              <td style="padding: 8px 0; font-weight: 600;"><a href="tel:${phone}" style="color: #006670; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Email:</td>
              <td style="padding: 8px 0;">${email || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Lead Source:</td>
              <td style="padding: 8px 0;">${source}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Current Status:</td>
              <td style="padding: 8px 0;">${statusOrType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Location:</td>
              <td style="padding: 8px 0;">${location}</td>
            </tr>
            ${budget !== "—" ? `<tr><td style="padding: 8px 0; color: #6b7280;">Budget:</td><td style="padding: 8px 0;">${budget}</td></tr>` : ""}
            ${timeline !== "—" ? `<tr><td style="padding: 8px 0; color: #6b7280;">Timeline:</td><td style="padding: 8px 0;">${timeline}</td></tr>` : ""}
          </table>

          <div style="margin-top: 20px; padding: 16px; background: #f9fafb; border-left: 4px solid #006670; border-radius: 4px;">
            <p style="margin: 0 0 6px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; font-weight: 600;">Project Details / Message:</p>
            <p style="margin: 0; font-size: 14px; color: #111827; white-space: pre-wrap;">${details}</p>
          </div>

          <div style="margin-top: 24px; text-align: center;">
            <a href="${waLink}" style="display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; font-weight: 600; border-radius: 6px; font-size: 14px;">
              💬 Open Chat on WhatsApp
            </a>
          </div>
        </div>

        <div style="background: #f9fafb; padding: 16px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb;">
          Essar Enterprises • Plan to Plant Consultancy • Operating since 2004
        </div>
      </div>
    `;

    MailApp.sendEmail({
      to: essarAdminEmail,
      subject: adminSubject,
      htmlBody: adminHtml
    });

    // 4. Email #2: Instant Professional Confirmation to the Client (if valid email provided)
    if (email && email.indexOf("@") > -1 && email.indexOf(".") > -1) {
      var userSubject = "Consultation Received | Essar Enterprises";
      var userHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background: #006670; color: #ffffff; padding: 28px 24px; text-align: center;">
            <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 600; letter-spacing: -0.5px;">Essar Enterprises</h1>
            <p style="margin: 0; font-size: 14px; opacity: 0.9;">Plan to Plant • Turnkey Water Business Consultants</p>
          </div>

          <div style="padding: 28px 24px; color: #1f2937; line-height: 1.6;">
            <p style="font-size: 16px; margin: 0 0 16px 0;">Dear <strong>${fullName}</strong>,</p>
            <p style="font-size: 14px; color: #4b5563; margin: 0 0 20px 0;">
              Thank you for reaching out to Essar Enterprises. We have successfully received your project consultation details.
            </p>

            <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; margin-bottom: 24px;">
              <p style="margin: 0 0 10px 0; font-size: 13px; font-weight: 600; color: #006670; text-transform: uppercase; letter-spacing: 0.5px;">What Happens Next?</p>
              <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #4b5563;">
                <li style="margin-bottom: 6px;">Our senior technical team will review your project parameters and location feasibility.</li>
                <li style="margin-bottom: 6px;">We will contact you within <strong>24 business hours</strong> via phone or WhatsApp at <strong>${phone}</strong>.</li>
                <li>We will discuss plant design, BIS/FSSAI licensing roadmap, machinery capacity, and investment estimates.</li>
              </ul>
            </div>

            <p style="font-size: 14px; color: #4b5563; margin: 0 0 20px 0;">
              Need immediate assistance or have urgent technical questions? You can chat directly with our principal consultant on WhatsApp:
            </p>

            <div style="text-align: center; margin-bottom: 24px;">
              <a href="https://wa.me/918884677773?text=Hi%20Essar%20Enterprises%2C%20I%20just%20submitted%20a%20consultation%20request." style="display: inline-block; background: #006670; color: #ffffff; text-decoration: none; padding: 12px 28px; font-weight: 600; border-radius: 6px; font-size: 14px;">
                Direct WhatsApp Contact
              </a>
            </div>

            <p style="font-size: 13px; color: #6b7280; margin: 0;">
              Warm regards,<br>
              <strong>Essar Enterprises Consulting Team</strong><br>
              Phone: +91 88846 77773<br>
              Email: webzio.info@gmail.com<br>
              Website: <a href="https://essarenterprises.co.in" style="color: #006670; text-decoration: none;">essarenterprises.co.in</a>
            </p>
          </div>

          <div style="background: #f9fafb; padding: 16px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb;">
            Operating continuously in the packaged drinking water sector across South India since 2004.
          </div>
        </div>
      `;

      MailApp.sendEmail({
        to: email,
        subject: userSubject,
        htmlBody: userHtml
      });
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
