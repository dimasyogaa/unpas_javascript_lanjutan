// Ada 3 cara membuat variabel dalam javascript
/*
1. VAR
2. LET
3. CONST
*/

// VAR
console.log(i);
var i = 10;
i2 = 12;
console.log(i);
console.log(i2);

console.log("");

// hoisting
// var h; seolah olah
// var h2; seolah olah
// var h3; seolah olah
console.log(h); // undefined
console.log(h2); // undefined
console.log(h2); // undefined
var h = 10,
  h2 = "yoga";
h3 = "dimas";
console.log(h); // 10
console.log(h2); // yoga
console.log(h3); // dimas

console.log("");

for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); // 10,
// karena var pada javascript tidak menganut block scope,
// sehingga akan meneruskan nilai terakhir pada perulangan {}
// var javascript hanya menganut function scope
console.log("");
function tes() {
  for (var i5 = 0; i5 < 10; i5++) {
    console.log(i5);
  }
}
tes();
// console.log(i5); // error, harusnya seperti ini agar tidak terjadi ambiguitas

console.log("");

// karena var javascript tidak menganut blok scope,
// para programmer javascript membuat cara agar javascript berperilaku sama dengan bahasa pemrograman (blok scope) dengan menggunakan function scopeyatu IIFE atau SIAF
// IIFE (Immediately Invoked Function Expression) atau SIAF (Self Invoking Anonymous Function)
// sebuah function expression yang dipanggil langsung ketika dibuat
// agar variabel yang ada di functionnya itu tidak bisa diakses dari luar function
// (function() {} ());
(function () {
  for (var i15 = 10; i15 < 20; i15++) {
    console.log(i15);
  }
})();

// console.log(i15); // error, ini memang yang kita harapkan, sehingga tidak terjadi ambiguitas ,
console.log("");

// Dengan hadirnya Javascript ES6, kita cukup gunakan LET saja, sehingga tidak perlu melakukan IIFE atau SIAF
// ketika menggunakan let, akan menganut blok scope, bukan function scope lagi
// // let dan const menganut block scope
for (let i100 = 40; i100 < 50; i100++) {
  console.log(i100);
}
// console.log(i100); error
console.log("");

// pada beberapa bahasa pemrograman,
// jika terjadi pemanggilan function atau variabel terlebih dahulu
// sebelum pendeklarasian function atau variabel tersebut,
// maka akan terjadi Error

// tetapi tidak bagi javascript, karena ada konsep hoisting
// pada javascript hal diatas tidak error tetapi akan menghasilkan nilai
// undefined untuk variabel, dan blok kode fungsi untuk function

// oleh karena itu, untuk menghindari konsep hoisting yang bisa mengakibatkan ambiguitas
// maka gunakan LET atau CONST, SEHINGGA JANGAN GUNAKAN LAGI VAR

// console.log(l); // error
// let l = 10;

// console.log(c); // error
// const c = 10;

// const untuk meminimalisir perubahan state
// bisa mengubah isi dari element atau property konstanta
// tidak bisa mengubah seluruh konstantanya
// gunakan let hanya untuk perulangan for saja

const c1 = 10;
// c1 = 15; // error

const mhs = {
  nama: "Sandhika",
  umur: 31,
};

mhs.umur = 35;

// mhs = {
//   nama: "Yoga",
//   umur: 31,
// }; error

console.log(mhs);

const arr = [1, 2, 3];
arr.push(4);

console.log(arr);
