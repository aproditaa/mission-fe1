export const tataCaraData = [
  {
    category: "Transfer Bank",
    subMethods: [
      {
        name: "ATM BCA",
        steps: [
          "Masukkan kartu ATM dan PIN BCA Anda",
          "Di menu utama, pilih 'Transaksi Lainnya'. Pilih 'Transfer'. Pilih 'Ke BCA Virtual Account'",
          "Masukkan nomor Virtual Account",
          "Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu Anda bayarkan, kemudian pilih 'Benar'",
          "Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika sudah benar pilih 'Ya', atau pilih 'Tidak' jika data di layar masih salah",
          "Transaksi Anda sudah selesai. Pilih 'Tidak' untuk tidak melanjutkan transaksi lain"
        ]
      },
      {
        name: "Mobile Banking BCA",
        steps: [
          "Buka Aplikasi BCA Mobile",
          "Pilih 'm-BCA', kemudian pilih 'm-Transfer'",
          "Pilih 'BCA Virtual Account'",
          "Masukkan nomor Virtual Account, lalu pilih 'OK'",
          "Klik tombol 'Send' yang berada di sudut kanan atas aplikasi untuk melakukan transfer",
          "Klik 'OK' untuk melanjutkan pembayaran",
          "Masukkan PIN Anda untuk meng-otorisasi transaksi",
          "Transaksi Anda telah selesai"
        ]
      },
      {
        name: "Internet Banking BCA",
        steps: [
          "Login ke KlikBCA Individual",
          "Pilih 'Transfer', kemudian pilih 'Transfer ke BCA Virtual Account'",
          "Masukkan nomor Virtual Account",
          "Pilih 'Lanjutkan' untuk melanjutkan pembayaran",
          "Masukkan 'RESPON KEYBCA APPLI 1' yang muncul pada Token BCA Anda, lalu klik tombol 'Kirim'",
          "Pembayaran telah selesai"
        ]
      }
    ]
  },
  { category: "E-Wallet", subMethods: [] },
  { category: "Kartu Kredit/Debit", subMethods: [] }
];