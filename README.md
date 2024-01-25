# Exercise 2
Buatlah web server dengan menggunakan NodeJS yang dapat memberikan respons untuk url-url berikut:
/  : Menampilkan text “This is the home page”. 
/about: Menampilkan text json dimana berisi
Status : success
Message : response success
Description: Exercise #03
Date : tanggal hari ini dengan format “2023-02-09T07:51:09+08:00”
Data : nama masing-masing anggota kelompok dimana memiliki key (id, nim, nama, nomor telp). Simpan data member ke dalam module terpisah dengan nama members.js.
/users : Menampilkan text json dimana berisi data users yang diambil dari public API https://jsonplaceholder.typicode.com/users. Ambil data tersebut dengan menggunakan Postman dan simpan ke dalam modul terpisah dengan nama users.js


## Persiapan 
1. Membuat folder
```
mkdir exercise2
cd exercise2

```

2. install node.js "package.json"
```
npm init
```
3. Buat file server
4. Buat file member (data memebr)
5. Buat file user (data dari API yang telah di ambil lewat postman)
6. Jalankan server
```
node server.js
```
7. akses
http://localhost:3000/ : Menampilkan teks "This is the home page"
http://localhost:3000/about : Menampilkan data JSON sesuai spesifikasi
http://localhost:3000/users : Menampilkan data JSON dari API JSONPlaceholder
