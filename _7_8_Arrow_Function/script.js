// Arrow Function
// Bentuk lain yang lebih ringkas dari function expression

// bentuk standard (Function Expression)
// const tampilPesan = function (nama) {
//   return `halo ${nama}`;
// };

// secara ringkas (arrow function)
// const tampilPesanRingkas = (nama) => {
//   return `halo ${nama}`;
// };

// pemanggilan
// console.log(tampilPesanRingkas("Yoga"));

// multiparameter
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };

// console.log(tampilNama("Dimas", "Malam"));

// implisit return
// jika hanya memiliki 1 parameter, dan hanya 1 statement untuk return
// tidak perlu menggunakan tanda kurung dan tanda kurung kurawal,bisa dituliskan sebaris
// const tampilNama2 = (nama) => `halo ${nama}`;
// console.log(tampilNama2("Pambudi", "Malam"));

// tanpa parameter
// wajiib menuliskan tanda kurung
// const tampilNama3 = () => "Hello World";
// console.log(tampilNama3());

// Contoh Lain
//function map : memetakan sebuah function ke dalam array

// let mahasiswa = ["Yoga", "Dimas", "Pambudi"];

// let jumlahHuruf = mahasiswa.map(function (nama) {

//   // mengetahui panjang dari masing masing array
//   return nama.length
// })
// console.log(jumlahHuruf);

// Arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// memetakan menjadi objek
//kurung kurawal dibungkus dengan tanda kurung
// let jumlahHuruf = mahasiswa.map( nama => ({ nama: nama, jmlHuruf: nama.length}))
// console.log(jumlahHuruf);
// console.table(jumlahHuruf); // agar tampilan lebih rapi pada console

// jika ingin mengembalikan objek yang propertynya sama dengan nilainya
// maka tidak perlu keduanya, cukup salah satu saja
// let jumlahHuruf2 = mahasiswa.map( nama => ({nama, jmlHuruf: nama.length}))
// console.table(jumlahHuruf2);

// console.log("");
// console.log("");

// konsep this pada arrow function

// constructor function
// const Mahasiswa = function () {
//   this.nama = "Yoga";
//   this.umur = 22;
//   this.sayHello = function() {
//     console.log(`Halo, nama saya ${this.nama},dan saya ${this.umur} tahun.`);
//   }
// };

// const yoga = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function () {
//   this.nama = "Yoga";
//   this.umur = 22;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama},dan saya ${this.umur} tahun.`);
//   };
// };

// const yoga = new Mahasiswa();

// Object Literal
// const mhs1 = {
//   nama: "Yoga",
//   umur: 22,
//   sayHello: function () {
//     console.log(`Halo, nama saya ${this.nama},dan saya ${this.umur} tahun.`);
//   },
// };

// mhs1.sayHello();
// console.log("");

// arrow function - tidak memiliki konsep this context
// const mhs2 = {
//   nama: "Yoga",
//   umur: 22,
//   sayHello: () => {
//     console.log(`Halo, nama saya ${this.nama},dan saya ${this.umur} tahun.`);
//   },
// };
// mhs2.sayHello();

// kasus lain

// const Mahasiswa = function () {
//   this.nama = "Yoga";
//   this.umur = 22;

//   // function expression, tidak kena hoisting
//   (this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama},dan saya ${this.umur} tahun.`);
//   }),
//     // function declaration, kena hoisting, sehingga function berada di luar function ini
//     // sehingga this.umur tidak cek di dalam function ini, tapi di globalnya
//     // setInterval(function () {
//     //   // console.log(this.umur); // undefined
//     //   // console.log(this.umur); // undefined++ = NaN
//     // }, 500);

//     // untuk mengatasi hal diatas, gunakan arrow function
//     // arrow function tidak memiliki konsep this context
//     // sehingga this - nya akan mencari ke lexical scopenya, bukan global
//     setInterval(() => {
//       console.log(this.umur++);
//     }, 500);
// };

// const yoga = new Mahasiswa();

// Studi Kasus
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    // temp = satu;
    // satu = dua;
    // dua = temp;

    // satu diisi dua, dua diisi satu
    [satu, dua] = [dua, satu]
  }

  this.classList.toggle(satu);

  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
