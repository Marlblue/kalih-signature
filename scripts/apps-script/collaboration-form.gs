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
    sheet.appendRow(["Timestamp", "Nama", "Kontak", "Minat Kolaborasi", "Pesan"]);
  }

  const params = e.parameter;
  const name = params.name || "";
  const contact = params.contact || "";
  const interest = params.interest || "";
  const message = params.message || "";

  sheet.appendRow([new Date(), name, contact, interest, message]);

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: `Pengajuan kolaborasi baru dari ${name || "(tanpa nama)"}`,
    body:
      `Ada pengisian form kolaborasi baru:\n\n` +
      `Nama: ${name}\n` +
      `Kontak: ${contact}\n` +
      `Minat Kolaborasi: ${interest}\n` +
      `Pesan: ${message}\n`,
  });

  return ContentService.createTextOutput(JSON.stringify({ status: "ok" })).setMimeType(
    ContentService.MimeType.JSON
  );
}
