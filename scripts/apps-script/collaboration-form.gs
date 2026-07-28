/**
 * Backend for components/HubungiCollaborationForm.tsx — appends each
 * submission as a row in a Google Sheet and emails a notification.
 *
 * Deploy steps:
 * 1. Buat Google Sheet baru (nama bebas).
 * 2. Extensions > Apps Script, hapus isi default, tempel seluruh isi file ini, lalu Save.
 * 3. Ganti NOTIFY_EMAIL di bawah dengan alamat email tujuan notifikasi.
 * 4. Deploy > New deployment > pilih tipe "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy URL hasil deploy (diakhiri "/exec") ke NEXT_PUBLIC_COLLAB_SCRIPT_URL di .env.local.
 * 6. Setiap kali script ini diubah, buat "New deployment" lagi agar URL ikut ter-update.
 */
const NOTIFY_EMAIL = "you@example.com";

function doPost(e) {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Kolaborasi") ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet("Kolaborasi");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Nama",
      "No. Telp/WhatsApp",
      "Platform",
      "Username",
      "Jumlah Follower",
      "Domisili",
      "Pesan/Proposal",
    ]);
  }

  const params = e.parameter;
  const name = params.name || "";
  const phone = params.phone || "";
  const platform = params.platform || "";
  const username = params.username || "";
  const followers = params.followers || "";
  const domicile = params.domicile || "";
  const message = params.message || "";

  sheet.appendRow([new Date(), name, phone, platform, username, followers, domicile, message]);

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: `Pengajuan kolaborasi baru dari ${name || "(tanpa nama)"}`,
    body:
      `Ada pengisian form kolaborasi baru:\n\n` +
      `Nama: ${name}\n` +
      `No. Telp/WhatsApp: ${phone}\n` +
      `Platform: ${platform}\n` +
      `Username: ${username}\n` +
      `Jumlah Follower: ${followers}\n` +
      `Domisili: ${domicile}\n` +
      `Pesan/Proposal: ${message}\n`,
  });

  return ContentService.createTextOutput(JSON.stringify({ status: "ok" })).setMimeType(
    ContentService.MimeType.JSON
  );
}
