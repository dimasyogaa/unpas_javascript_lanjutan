// cara untuk membuat objek pada javascript

// 1. Object Literal
// PROBLEM : tidak efektif untuk objek yang banyak
// let mahasiswa = {
//   nama: "Yoga",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi; //  sama dengan this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`); // `` backtick : string literal, bisa langsung memanggil nama variabel
//   },
// };

// -------------------------------------------------------------------------------------

// 2. Function Declaration, seperti class pada oop, harus ada return. lalu diinstansiasi
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};

//   // property
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   // method
//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   };

//   return mahasiswa;
// }

// ============= lebih efektif =========================
// objek methodMahasiswa dipanggil satu kali di dalam memory
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur!`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};

//   // property - mengambil data dari parameter
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   // method
//   // mengambil data dari objek lain,
//   // yang mana objek tersebut sudah ada
//   // dan dibuat satu kali dalam memory
//   // pastikan method pada objek itu ada,
//   // cara lebih efektif lagi menggunakan Object.create(),
//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.main = methodMahasiswa.main;
//   mahasiswa.tidur = methodMahasiswa.tidur;

//   return mahasiswa;
// }

// *** ============= Cara lebih efektif Object.create() =========================
// function Mahasiswa(nama, energi) {

//   // objek mahasiswa dibuat sambil membawa objek lain yaitu methodMahasiswa
//   // mirip seperti inheritance/pewarisan dalam oop
//   let mahasiswa = Object.create(methodMahasiswa); // sama seperti let mahasiswa = {};

//   // property - mengambil data dari parameter
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   // method
//   // tidak perlu menginisiasi method makan, main dan tidur

//   return mahasiswa;
// }

// // instansiasi, objek Mahasiswa dibuat ulang tiap instansiasi
// let Yoga = Mahasiswa("Yoga", 15);
// let Dimas = Mahasiswa("Dimas", 10);

// PROBLEM :
/*
kita harus masih memnyimpan 2 objek di memory yaitu objek methodMahasiswa dan objek Mahasiswa
ada cara lebih efektif supaya tidak perlu bikin objek lain(methodMahasiswa) sebagai pendukung objek lain(Mahasiswa)
yaitu menggunakan Prototype

*/

// -------------------------------------------------------------------------------------

// 3. Constructor Function
// keyword new
// hampir sama seperti function declaration, tetapi
// tidak perlu menuliskan deklarasi variabel dan returnnya
// function Mahasiswa(nama, energi) {
//   // property
//   this.nama = nama;
//   this.energi = energi;

//   // method
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   };
// }

// instansiasi
// let Pambudi = new Mahasiswa("Pambudi", 25);

// -------------------------------------------------------------------------------------

// 4. Object.create - lihat pada tag komentar yang terdapat tanda 3 bintang ***

// -------------------------------------------------------------------------

// PROTOTYPE
// Pengenalan
// function Mahasiswa(nama, energi) {

//   // let mahasiswa = Object.create(methodMahasiswa);
//   // let mahasiswa = {};

//   // tidak sesimpel ini
//   // let this = {};
//   // tapi juga memanggil Object.create() di belakang layar
//   // ada sebuah properti default yang dijadikan parent
//   // let this = Object.create(Mahasiswa.prototype);

//   // secara default constructor function sudah memiliki parent yaitu protoype

//   this.nama = nama;
//   this.energi = energi;

//   // return mahasiswa;

//   // return this;
// }

// studi kasus

// versi object prototype inheritance
/*
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan!`;
};

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama}, selamat bermain!`;
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${this.nama}, selamat tidur!`;
};

let pambudi = new Mahasiswa("Pambudi", 10);

*/

// versi class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }

  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
  }
}

let pambudi = new Mahasiswa("Pambudi", 10);


let angka = [];
// yang terjadi di belakang array
// let angka = new Array();
// function Array() {
//   let this = Object.create(Array.prototype);
// }

/*
bisa di ketikan di console
Array.prototype
Object.prototype
Number.prototype

*/
