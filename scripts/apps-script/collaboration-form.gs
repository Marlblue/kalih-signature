/**
 * Backend for components/HubungiCollaborationForm.tsx — appends each
 * submission as a row in a Google Sheet and emails a notification.
 *
 * Form-nya tidak lagi memanggil URL ini langsung dari browser; permintaan datang
 * dari route handler app/api/kolaborasi/route.ts di server.
 *
 * Deploy steps:
 * 1. Buat Google Sheet baru (nama bebas).
 * 2. Extensions > Apps Script, hapus isi default, tempel seluruh isi file ini, lalu Save.
 * 3. Ganti NOTIFY_EMAIL di bawah dengan alamat email tujuan notifikasi.
 * 4. Isi SHARED_SECRET dengan teks acak yang panjang, lalu pasang teks yang sama
 *    persis sebagai env FORMS_SHARED_SECRET di Vercel/.env.local. Selama masih
 *    kosong, pemeriksaannya nonaktif — jadi urutan pemasangannya bebas.
 * 5. Deploy > New deployment > pilih tipe "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy URL hasil deploy (diakhiri "/exec") ke COLLAB_SCRIPT_URL di .env.local.
 * 7. Setiap kali script ini diubah, buat "New deployment" lagi agar URL ikut ter-update.
 */
const NOTIFY_EMAIL = "you@example.com";

// URL web app ini bersifat publik, jadi tanpa secret siapa pun yang menemukannya
// bisa membanjiri Sheet dan menghabiskan kuota email harian Gmail.
const SHARED_SECRET = "";

function doPost(e) {
  if (SHARED_SECRET && (!e.parameter || e.parameter.token !== SHARED_SECRET)) {
    return jsonOutput({ status: "error", error: "unauthorized" });
  }

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

  // Email dikirim setelah baris tersimpan dan dibungkus try/catch: kalau kuota
  // harian Gmail habis, pengajuan yang sudah masuk Sheet tetap dihitung berhasil
  // dan pengaju tidak disuruh mengirim ulang.
  try {
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
  } catch (err) {
    Logger.log("Gagal kirim email: " + err);
  }

  return jsonOutput({ status: "ok" });
}

function jsonOutput(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
