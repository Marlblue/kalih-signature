import { HONEYPOT_FIELD } from "@/lib/forms/validate";

/**
 * Input jebakan untuk penyaring bot. Disembunyikan lewat posisi di luar layar
 * (bukan `display: none`, yang lebih sering dikenali dan dilewati bot) serta
 * dijauhkan dari pengguna keyboard dan screen reader, jadi hanya skrip yang
 * mengisi semua field di DOM yang akan terjaring — lihat lib/forms/validate.ts.
 */
export default function HoneypotField() {
  return (
    <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
      <label htmlFor={HONEYPOT_FIELD}>Jangan isi kolom ini</label>
      <input
        id={HONEYPOT_FIELD}
        name={HONEYPOT_FIELD}
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
