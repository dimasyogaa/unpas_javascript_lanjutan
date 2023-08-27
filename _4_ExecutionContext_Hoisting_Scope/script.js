// EXECUTION CONTEXT, HOISTING, & SCOPE

console.log(nama);
var nama = "yoga"; // tidak error, tapi hasilnya undefined
console.log("");

// saat program dijalankan ada creation phase (fase pembuatan)
// terjadi di konteks global

// 1. creation phase pada Global Context
// berikut yang terjadi pada EXECUTION CONTEXT di fase kreasi (Creation Phase)
// semua variabel akan diisi dulu dengan undefined
// semua function akan diisi dulu dengan tulisan fn() (tidak dijalankan functionnya)
// konsep ini dinamakan HOISTING
// analogi nya seperti pengerekan bendera ke atas
// meskipun variabel ditulis di bawah console log,
// javascript akan menaikan variabel tersebut sebelum consolelog

// ketika tidak ada kodingan apapun
// secara default javascript mendefinisikan object window sebagai global object
// dan this sebagai window

// 2. execution phase
// mengeksekusi programnya dari atas ke bawah

// contoh yang undefined
// console.log(sayHello);
// console.log(sayHello());

// var nama2 = "yoga";
// var umur = 33;

// function sayHello() {
//   console.log(`Halo, nama saya ${nama2}, saya ${umur} tahun.`);
// }
console.log("");
// contoh yang tidak undefined
var nama2 = "yoga";
var umur = 33;

console.log(sayHello);
console.log(sayHello());

// function yang baik mengembalikan nilai
function sayHello() {
  return `Halo, nama saya ${nama2}, saya ${umur} tahun.`;
}

console.log("");

// function membuat local Execution Context
// yang di dalamnya terdapat creation dan exceution phase
// kita bisa akses window dan juga arguments, serta hoisting

// scope
// variable akan mencari variabel yang terdefinisi terdekatnya
// variabel username akan cek terlebih dahulu pada
// 1. di local (ada engga di dalam function)
// 2. pada argumen
// 3. di global
// jika tidak terdefinisi pada 3 scope diatas, maka akan menampilkan error, ReferenceError

// studi kasus 1
var nama3 = "Yoga Dimas";
var username = "@y0gadimas";

function cetakURL(username) {
  var instagramURL = "https://instagram.com/";
  return instagramURL + username;
}

console.log(cetakURL(username)); // @y0gadimas
console.log(cetakURL("@pambudi")); // @pambudi

console.log("");

function cetakURL2() {
  console.log(arguments);
  console.log(arguments[0]);

  var instagramURL = "https://instagram.com/";
  return instagramURL + username;
}

console.log(cetakURL2("@dimas")); // @y0gadimas

console.log("");

//  studi kasus 2
function a() {
  console.log("ini a");

  function b() {
    console.log("ini b");

    function c() {
      console.log("ini c");
    }
    c();
  }
  b();
}
a();

// referensi javascript visualizer untuk  mengetahui visualisasi bagaimana javascript mengeksekusi kode kita
// https://pythontutor.com/javascript.html#mode=edit

// pemahaman

console.log("");

function satu() {
  var xnama = "Sandhika";
  console.log(xnama);
}

function dua() {
  console.log(xnama);
}

console.log(xnama); // undefined

var xnama = "Erik";

satu(); // Sandhika

dua("Doddy"); // Erik

console.log(xnama); // Erik
