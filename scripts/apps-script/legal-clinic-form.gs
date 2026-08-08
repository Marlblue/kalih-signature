/**
 * Backend for components/LegalClinicForm.tsx (form pendaftaran Legal Clinic di
 * /hubungi/legal-clinic) — menyimpan tiap pendaftaran sebagai baris di Google
 * Sheet dan mengirim notifikasi email.
 *
 * Deploy steps:
 * 1. Buat Google Sheet baru (nama bebas).
 * 2. Extensions > Apps Script, hapus isi default, tempel seluruh isi file ini, lalu Save.
 * 3. Ganti NOTIFY_EMAIL di bawah dengan alamat email tujuan notifikasi.
 * 4. Jalankan fungsi testNotifikasi sekali (pilih di dropdown lalu Run) untuk
 *    memastikan emailnya masuk. Kali pertama akan diminta Authorize.
 * 5. Deploy > New deployment > pilih tipe "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy URL hasil deploy (diakhiri "/exec") ke NEXT_PUBLIC_LEGAL_CLINIC_SCRIPT_URL di .env.local.
 * 7. Setiap kali script ini diubah, buat "New deployment" lagi agar URL ikut ter-update.
 */
const NOTIFY_EMAIL = "you@example.com";

function doPost(e) {
  const params = e.parameter;
  const name = params.name || "";
  const phone = params.phone || "";
  const email = params.email || "";
  const domicile = params.domicile || "";
  const category = params.category || "";
  const message = params.message || "";
  const consent = params.consent || "";

  // Simpan ke sheet DULU, baru kirim email. Pengiriman email dibungkus try/catch
  // supaya kalau gagal (misal kuota harian Gmail habis), data pendaftaran yang
  // sudah masuk sheet tetap aman.
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet =
    spreadsheet.getSheetByName("Legal Clinic") || spreadsheet.insertSheet("Legal Clinic");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Nama",
      "Nomor WhatsApp",
      "Email",
      "Domisili",
      "Kategori Konsultasi",
      "Permasalahan",
      "Setuju Ketentuan",
    ]);
  }

  sheet.appendRow([new Date(), name, phone, email, domicile, category, message, consent]);

  try {
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: "Pendaftaran Legal Clinic baru dari " + (name || "(tanpa nama)"),
      body:
        "Ada pendaftaran Legal Clinic baru:\n\n" +
        "Nama: " + name + "\n" +
        "Nomor WhatsApp: " + phone + "\n" +
        "Email: " + email + "\n" +
        "Domisili: " + domicile + "\n" +
        "Kategori Konsultasi: " + category + "\n" +
        "Permasalahan: " + message + "\n" +
        "Setuju Ketentuan: " + consent + "\n",
    });
  } catch (err) {
    Logger.log("Gagal kirim email: " + err);
  }

  return ContentService.createTextOutput(JSON.stringify({ status: "ok" })).setMimeType(
    ContentService.MimeType.JSON
  );
}

/**
 * Jalankan manual dari editor untuk mengetes notifikasi email tanpa harus
 * mengisi form dari website. Cek hasilnya di menu "Executions".
 */
function testNotifikasi() {
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: "[TES] Notifikasi Legal Clinic",
    body:
      "Ini pesan tes:\n\n" +
      "Nama: Tes Pendaftaran\n" +
      "Nomor WhatsApp: +628123456789\n" +
      "Email: tes@example.com\n" +
      "Domisili: Tegal\n" +
      "Kategori Konsultasi: Hukum Perdata\n" +
      "Permasalahan: Ini hanya pesan tes.\n" +
      "Setuju Ketentuan: Ya\n",
  });
}
