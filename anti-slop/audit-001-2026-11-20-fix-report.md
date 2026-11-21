# Laporan perbaikan audit 001 (2026-11-20)

Nomor yang disetujui: 1 sampai 9 (HIGH), 10, 11, 19. Nomor lain tidak diubah.
Frame yang diubah: Hybrid – Desktop (3102), Hybrid – Mobile (3575, baru), Popup – Form Pesanan WA (3531), Popup Mobile – Form Pesanan WA (3998, baru), Popup – Validasi (4048, baru), Popup – Terkirim (4081, baru), Popup – Gagal Membuka WhatsApp (4086, baru).

| No | Status | Perubahan |
|---|---|---|
| 1 | Diperbaiki | Statistik diganti fakta dari desain: "2020 Mulai Berjualan", "2 Cabang di Pasar Semarang", "06.00 Buka Setiap Hari". |
| 2 | Diperbaiki | "100% Halal / Higienis & Bersih" diganti "Sejak 2020 / Dua cabang pasar". Klaim halal bisa dikembalikan setelah ada nomor sertifikat. |
| 3 | Diperbaiki | "Buka Sekarang" + titik hijau diganti label netral "Buka setiap hari". Di website, status buka bisa dihitung dari jam operasional. |
| 4 | Diperbaiki | Tag "Paling Banyak Dipesan" dihapus, "Best Seller!" jadi "Ayam Ungkep", kalimat "ratusan porsi" dan kata "legendaris" dihapus. |
| 5 | Diperbaiki | Thumbnail hero jadi "Ayam Utuh Rp 75.000" sesuai fotonya. Foto kartu "Bebek Utuh 1 Ekor" diganti placeholder "[Foto bebek utuh menyusul]" sampai ada foto bebek asli. |
| 6 | Diperbaiki | Navbar Menu / Nasi Box / Lokasi dan "Lihat Daftar Menu & Harga" scroll ke section. Semua tombol "+ Pesan" dan "Konsultasi Menu Gratis" membuka popup. "Ke Gang Baru" dan "Ke Prembaen" membuka `wa.me` cabang. Tab filter menu dihapus karena tidak punya fungsi filter. |
| 7 | Diperbaiki | Tiga state popup baru: Validasi (field merah + pesan error), Terkirim, Gagal Membuka WhatsApp. |
| 8 | Diperbaiki | Warna placeholder form `#9CA3AF` diganti `#6B5A50` (kontras sekitar 5.8:1 di `#F0EDED`). |
| 9 | Diperbaiki | Frame Hybrid – Mobile 390px dengan susunan dan perbaikan yang sama, plus popup mobile berbentuk bottom sheet. |
| 10 | Diperbaiki | Ikon serangga diganti ikon `set_meal`. |
| 11 | Diperbaiki | Eyebrow "Menu & Pilihan Rasa", "Kualitas Terjamin", dan pill "Pesan Sekarang" dihapus. Badge hero "Sejak Tahun 2020" dipertahankan karena membawa fakta. |
| 19 | Diperbaiki | "Bakar Klaten" dan "Ayam Bakar Klaten" jadi "Ayam Bumbu Klaten"; "Bebek Goreng" jadi "Bebek Bumbu Kuning" di hero dan placeholder form. |

## Yang masih perlu data pemilik

- Foto bebek utuh asli untuk kartu "Bebek Utuh 1 Ekor".
- Nomor sertifikat halal kalau klaim halal mau ditampilkan.
- Klaim "Rempah Alami / Tanpa Pengawet" dan "Resep Otentik Semarang" belum masuk audit, tapi tetap sebaiknya dikonfirmasi.

## Catatan verifikasi

Tampilan diverifikasi lewat screenshot FigCraft. Interaksi prototype terpasang tanpa error, tapi belum diklik satu per satu di mode Present. Ini desain, belum website, jadi click-through di browser (R-35) dan keyboard (R-32) dilakukan saat website dibangun.
