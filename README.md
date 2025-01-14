### Penjelasan Folder dan File

- `asset/`: Folder ini berisi semua aset yang digunakan dalam proyek.
  - `css/`: Folder ini berisi file CSS untuk styling halaman web.
    - `global.css`: File ini berisi variabel CSS global yang digunakan di seluruh proyek.
    - `linking.css`: File ini mengimpor `global.css` dan dapat digunakan untuk menghubungkan berbagai macam font dan lain-lain melalui CSS.
  - `icon/`: Folder ini berisi ikon yang digunakan dalam proyek.
  - `img/`: Folder ini berisi gambar yang digunakan dalam proyek.
  - `js/`: Folder ini berisi file JavaScript yang digunakan dalam proyek.


## Cara Menggunakan
1. Tambahkan ikon ke dalam folder `asset/icon/` dan gambar ke dalam folder `asset/img/` sesuai kebutuhan.
2. Tambahkan file JavaScript ke dalam folder `asset/js/` untuk menambahkan interaktivitas ke halaman web.

# Components
Daftar Components:
1. <h-navbar> untuk navbar
2. <f-footer> untuk footer

Jika anda ingin menggunakan component, dengan cara:
1. <script type="module" src="asset/js/linking.js"></script> letakkan code ini di bagian head
2. panggil componentnya, misalkan

<body>
  <h-navbar></h-navbar>
  <f-footer></f-footer>
</body>

Jika ingin menambah component simpan di folder 'asset/js/components' dan import component di file 'asset/js/linking.js'
