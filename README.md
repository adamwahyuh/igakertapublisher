
### Penjelasan Folder dan File

- `asset/`: Folder ini berisi semua aset yang digunakan dalam proyek.
  - `css/`: Folder ini berisi file CSS untuk styling halaman web.
    - `global.css`: File ini berisi variabel CSS global yang digunakan di seluruh proyek.
    - `linking.css`: File ini mengimpor `global.css` dan dapat digunakan untuk menghubungkan berbagai macam font dan lain-lain melalui CSS.
  - `icon/`: Folder ini berisi ikon yang digunakan dalam proyek.
  - `img/`: Folder ini berisi gambar yang digunakan dalam proyek.
  - `js/`: Folder ini berisi file JavaScript yang digunakan dalam proyek.
- `components/`: Folder ini berisi komponen web yang digunakan dalam proyek.
  - `h-navbar.js`: Komponen ini digunakan untuk membuat navigasi header.
  - `f-footer.js`: Komponen ini digunakan untuk membuat footer.

## Cara Menggunakan

1. Edit file CSS di dalam folder `asset/css/` untuk mengubah tampilan halaman web.
2. Tambahkan ikon ke dalam folder `asset/icon/` dan gambar ke dalam folder `asset/img/` sesuai kebutuhan.
3. Tambahkan file JavaScript ke dalam folder `asset/js/` untuk menambahkan interaktivitas ke halaman web.
4. Tambahkan atau edit komponen di dalam folder `components/` untuk menambahkan atau mengubah bagian-bagian dari halaman web.

## Components

Daftar Components:
1. `<h-navbar>` untuk navbar
2. `<f-footer>` untuk footer

Jika Anda ingin menggunakan komponen, lakukan langkah-langkah berikut:
1. Letakkan kode berikut di bagian `<head>`:
   ```html
   <script type="module" src="asset/js/linking.js"></script>
2. panggil componentnya, misalkan di dalam body:

```html
  <body>
    <h-navbar></h-navbar>
    <f-footer></f-footer>
  </body>

3. Jika ingin menambah component simpan di folder 'asset/js/components' dan import component di file 'asset/js/linking.js'