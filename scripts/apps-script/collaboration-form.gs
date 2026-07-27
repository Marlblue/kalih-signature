/**
 * Backend for components/HubungiCollaborationForm.tsx — appends each
 * submission as a row in a Google Sheet.
 *
 * Deploy steps:
 * 1. Buat Google Sheet baru (nama bebas).
 * 2. Extensions > Apps Script, hapus isi default, tempel seluruh isi file ini, lalu Save.
 * 3. Deploy > New deployment > pilih tipe "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy URL hasil deploy (diakhiri "/exec") ke NEXT_PUBLIC_COLLAB_SCRIPT_URL di .env.local.
 * 5. Setiap kali script ini diubah, buat "New deployment" lagi agar URL ikut ter-update.
 */
function doPost(e) {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Kolaborasi") ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet("Kolaborasi");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp", "Nama", "Kontak", "Minat Kolaborasi", "Pesan"]);
  }

  const params = e.parameter;
  sheet.appendRow([
    new Date(),
    params.name || "",
    params.contact || "",
    params.interest || "",
    params.message || "",
  ]);

  return ContentService.createTextOutput(JSON.stringify({ status: "ok" })).setMimeType(
    ContentService.MimeType.JSON
  );
}
