/**
 * Essar Enterprises - Google Apps Script Webhook Handler
 * 
 * Location: Google Sheets > Extensions > Apps Script
 * 
 * Capabilities:
 * 1. Matches exact Google Sheet columns (Date, First Name, Last Name, Phone, Email, Status, Details, Source)
 * 2. Includes Essar official logo in both emails
 * 3. Sends Instant Admin Email Alert to Essar (webzio.info@gmail.com) with WhatsApp 1-click link
 * 4. Sends Branded Confirmation Email to the user with proper Sender Name & Reply-To
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var contents = e.postData.contents;
    var data = JSON.parse(contents);

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var timestamp = new Date();

    // 1. Extract and normalize fields to fit your Google Sheet columns
    var firstName = data.firstName || (data.name ? data.name.split(" ")[0] : "Client");
    var lastName = data.lastName || (data.name && data.name.split(" ").length > 1 ? data.name.split(" ").slice(1).join(" ") : "");
    var fullName = (firstName + " " + lastName).trim();
    var phone = data.phone || "—";
    var email = (data.email || "").trim();
    var statusOrType = data.status || data.plantType || "—";
    var details = data.projectDetails || data.message || "—";
    var source = data.source || "Website Consultation";
    var location = data.location || "South India";

    // 2. Append Row matching your exact sheet columns:
    // Col A: Date & Time | Col B: First Name | Col C: Last Name | Col D: Phone Number | Col E: Email Address | Col F: Client Status | Col G: Project Details | Col H: Source
    sheet.appendRow([
      timestamp,
      firstName,
      lastName,
      phone,
      email,
      statusOrType,
      details,
      source
    ]);

    var logoBannerUrl = "https://www.essarenterprises.co.in/logos/email-header-banner.png";
    var waCleanPhone = phone.replace(/[^0-9]/g, "");
    var waLink = "https://wa.me/" + (waCleanPhone.length === 10 ? "91" + waCleanPhone : waCleanPhone);

    // 3. Email #1: Instant Alert to Essar Admin (webzio.info@gmail.com)
    var essarAdminEmail = "webzio.info@gmail.com";
    var adminSubject = "🔥 New Lead: " + fullName + " (" + phone + ") - " + source;
    var adminHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <img src="${logoBannerUrl}" alt="Essar Enterprises" width="600" style="width: 100%; max-width: 600px; height: auto; display: block; margin: 0 auto; background-color: #ffffff;" />
        
        <div style="padding: 24px; color: #1f2937; line-height: 1.6;">
          <div style="background: #e6f0f2; border-left: 4px solid #006670; padding: 12px 16px; border-radius: 4px; margin-bottom: 20px;">
            <h2 style="margin: 0 0 4px 0; font-size: 16px; font-weight: 700; color: #006670;">🔥 New Consultation Lead</h2>
            <p style="margin: 0; font-size: 13px; color: #4b5563;">Website Form Submission</p>
          </div>
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
              <td style="padding: 8px 0; color: #6b7280;">Status:</td>
              <td style="padding: 8px 0;">${statusOrType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Lead Source:</td>
              <td style="padding: 8px 0;">${source}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Location:</td>
              <td style="padding: 8px 0;">${location}</td>
            </tr>
          </table>

          <div style="margin-top: 18px; padding: 14px; background: #f9fafb; border-left: 4px solid #006670; border-radius: 4px;">
            <p style="margin: 0 0 6px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; font-weight: 600;">Project Details / Message:</p>
            <p style="margin: 0; font-size: 14px; color: #111827; white-space: pre-wrap;">${details}</p>
          </div>

          <div style="margin-top: 24px; text-align: center;">
            <a href="${waLink}" style="display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; font-weight: 600; border-radius: 6px; font-size: 14px;">
              💬 Open Chat on WhatsApp
            </a>
          </div>
        </div>

        <div style="background: #f9fafb; padding: 14px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb;">
          Essar Enterprises • Plan to Plant Consultancy • Operating since 2004
        </div>
      </div>
    `;

    MailApp.sendEmail({
      to: essarAdminEmail,
      name: "Essar Web Leads",
      subject: adminSubject,
      htmlBody: adminHtml,
      replyTo: email || "webzio.info@gmail.com"
    });

    // 4. Email #2: Instant Professional Confirmation to Client
    if (email && email.indexOf("@") > -1) {
      try {
        var userSubject = "Consultation Request Received | Essar Enterprises";
        var userHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
            <img src="${logoBannerUrl}" alt="Essar Enterprises" width="600" style="width: 100%; max-width: 600px; height: auto; display: block; margin: 0 auto; background-color: #ffffff;" />

            <div style="padding: 24px; color: #1f2937; line-height: 1.6;">
              <p style="font-size: 15px; margin: 0 0 14px 0;">Dear <strong>${firstName}</strong>,</p>
              <p style="font-size: 14px; color: #4b5563; margin: 0 0 18px 0;">
                Thank you for contacting <strong>Essar Enterprises</strong>. We have received your consultation inquiry for your packaged drinking water plant project.
              </p>

              <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; margin-bottom: 20px;">
                <p style="margin: 0 0 10px 0; font-size: 13px; font-weight: 600; color: #006670; text-transform: uppercase; letter-spacing: 0.5px;">Next Steps:</p>
                <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #4b5563; line-height: 1.6;">
                  <li style="margin-bottom: 6px;">Our senior engineering team will evaluate your water project parameters.</li>
                  <li style="margin-bottom: 6px;">We will connect with you via phone or WhatsApp at <strong>${phone}</strong> within <strong>24 business hours</strong>.</li>
                  <li>We will discuss plant design, BIS licensing roadmap, machinery selection, and commercial feasibility.</li>
                </ul>
              </div>

              <p style="font-size: 14px; color: #4b5563; margin: 0 0 16px 0;">
                Have immediate questions or want to discuss site specifications right away?
              </p>

              <div style="text-align: center; margin-bottom: 24px;">
                <a href="https://wa.me/918884677773?text=Hi%20Essar%20Enterprises%2C%20I%20just%20submitted%20a%20consultation%20request." style="display: inline-block; background: #006670; color: #ffffff; text-decoration: none; padding: 12px 28px; font-weight: 600; border-radius: 6px; font-size: 14px;">
                  💬 Chat on WhatsApp (+91 88846 77773)
                </a>
              </div>

              <p style="font-size: 13px; color: #6b7280; margin: 0; line-height: 1.6;">
                Warm regards,<br>
                <strong>Essar Enterprises Consulting Team</strong><br>
                Phone: +91 88846 77773<br>
                Email: webzio.info@gmail.com<br>
                Website: <a href="https://essarenterprises.co.in" style="color: #006670; text-decoration: none;">essarenterprises.co.in</a>
              </p>
            </div>

            <div style="background: #f9fafb; padding: 14px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb;">
              Supporting commercial packaged drinking water plants across South India since 2004.
            </div>
          </div>
        `;

        MailApp.sendEmail({
          to: email,
          name: "Essar Enterprises",
          subject: userSubject,
          htmlBody: userHtml,
          replyTo: "webzio.info@gmail.com"
        });
      } catch (errUserMail) {
        console.error("User email notification error: " + errUserMail.toString());
      }
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
