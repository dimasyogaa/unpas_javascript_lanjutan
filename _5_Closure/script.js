// Closure

// function yang di-return oleh function

// menggunakan lexical scope

// lexical scope adalah salah satu jenis scope yang terdapat dalam pemrograman
// Lexical scope sendiri dapat diartikan sebagai
// konsep scope yang merupakan sebuah group function yang bersarang (nested).

// cara kerja lexical scope di Javascript.
// Yaitu function dapat mengakses variabel di luar function tersebut.
// Tetapi sebuah function tidak dapat mengakses variabel yang terdapat di function lain.

// inner function itu bisa memiliki akses ke parent variabelnya

// inner function yang membutuhkan variabel yang ada di parent scopenya
// maka inner function ini disebut closure

// function init() {
//   let nama = "Yoga"; // local variabel
//   // - let umur1 = 33;
//   // - let umur2 = 34;

//   // inner function (closure)
//   function tampilNama() {
//     console.log(nama); // akses ke parent variabel
//     // - console.log(umur2);
//   }

//   // inner function (bukan closure)
//   function tampilNama2() {
//     var nama = "Dimas"; // local variabel tampilNama2
//     console.log(nama); // akses ke local variabel tampilNama2
//   }

//   // - console.dir(tampilNama);
//   // tampilNama();

//   // ~ mengembalikan function tanpa menjalankan
//   return tampilNama;
// }

// // init();

// // ~ untuk menjalankannya,simpan ke dalam variabel
// let panggilNama = init();
// panggilNama();

// -------------------------------------------------------------------------

//Salah satu penggunaan dari Closure
// function init() {

//   // Function Factory
//   function tampilNama(nama) {
//     console.log(nama);
//   }
//   return tampilNama;
// }

// bisa diringkas seperti di bawah ini

// function init() {

//   return function (nama) {
//     console.log(nama);
//   }

// }

// let panggilNama = init();
// panggilNama("Yoga Dimas");

// ----------------------------------------------------------

// Kenapa menggunakan Closure
// 1. untuk membuat function factories
// 2. untuk membuat private method

// 1.function factories
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
  };
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");

// closure dengan lexical scopenya yaitu variabel waktu yang isinya "Malam"
let selamatMalam = ucapkanSalam("Malam");

selamatPagi("yoga");
selamatMalam("dimas");

console.log("");

// ucapkanSalam sudah berjalan, tinggal nunggu argumen selamatMalam
console.dir(selamatMalam);
console.dir(selamatMalam("pambudi"));

console.log("");

// 2. private method

// function expression
// variabel counter menjadi private, tidak bisa diakses dari luar
// tetapi value yang bertambah tetap dipertahankan karena menjadi closure
let add = function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
};

// add() menjalankan semuanya, tapi belum menjalankan function di dalamnya
// a menjalankan function di dalam function add()
let a = add();

console.log(a());
console.log(a());
console.log(a());

console.log("");

// lebih ringkas - menggunakan immediately invoke function
// tanpa perlu menyimpan ke dalam variabel terlebih dahulu
let add2 = (function () {
  let counter = 10;
  return function () {
    return ++counter;
  };
})();

counter = 100 // tidak akan mengganggu function counternya

console.log(add2());
console.log(add2());
console.log(add2());
console.log(add2());
console.log(add2());
console.log(add2());
