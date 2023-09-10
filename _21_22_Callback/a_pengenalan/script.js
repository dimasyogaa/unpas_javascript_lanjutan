// Callback

// Synchronous Callback - jarang digunakan
// cara 1
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(iniCallback) {
//   const nama = prompt("Masukkan Nama : ");
//   iniCallback(nama);
// }

// tampilkanPesan(halo);

// cara 2
// value pada nama1 akan diterima oleh nama2
// function tampilkanPesan(iniCallback) {
//   const nama1 = prompt("Masukkan Nama : ");
//   iniCallback(nama1);
// }

// tampilkanPesan((nama2) => alert(`Halo, ${nama2}`));

// ASYNCHRONOUS CALLBACK

// -- belum menggunakan asynchronous callback
// array of object
// const mhs = [
//   {
//     nama: "Yoga Dimas",
//     nrp: "043040023",
//     email: "yogadimas@gmail.com",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 1,
//   },
//   {
//     nama: "Doddy Ferdiansyah",
//     nrp: 133040123,
//     email: "doddy@gmail.com",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 2,
//   },
//   {
//     nama: "Erik",
//     nrp: 104040001,
//     email: "erik@gmail.com",
//     jurusan: "Teknik Industri",
//     idDosenWali: 3,
//   },
// ];

// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

// MENGGUNAKAN ASYNCHRONOUS CALLBACK

/* AJAX dengan Vanilla JS

// AJAX dengan Vanilla JS
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  // melakukan request secara asynchronous menggunakan ajax
  // state 4 = sudah siap
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  // menjalankan ajax
  xhr.open("get", url);
  xhr.send();
}

console.log("mulai");
console.log("");

getDataMahasiswa(
  "data/mahasiswa.json",
  (results) => {
    // console.log(results); // bentuk teks
    // console.log(JSON.parse(results)); // bentuk object

    const mhs = JSON.parse(results);

    // for in
    for (m in mhs) {
      console.log(mhs[m].nrp);
    }

    console.log("");

    // foreach
    mhs.forEach((m) => console.log(m.nama));

    console.log("");

    // for of
    for (m of mhs) {
      console.log(m.jurusan);
    }
  },
  () => {}
);

console.log("selesai");
console.log("");

*/

/*
note: jika kena error CORS artinya file/project harus dijalankan/disimpan di sbuah web server(xampp htdocs) atau menggunakan extension vs code (live server)
*/

// AJAX dengan JQUERY
console.log("mulai");
console.log("");

// ajax memiliki parameter object
$.ajax({
  url: "data/mahasiswa.json",
  //   url: "data/mahasiswa.jsn",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});

console.log("selesai");
console.log("");

/*
Jquery versi slim tidak ada AJAX
Boostrap yang menggunakan JQuery yang slim artinya belum ada AJAX nya
*/
