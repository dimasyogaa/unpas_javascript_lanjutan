// High Order Function
// Function yang beroperasi pada function yang lain Baik itu digunakan dalam argument, maupun sebagai value.

// first class function
// inti dari sebuah bahasa pemrograman(javascript) itu function
// javascript memperlakukan function sebagai object

// function kerjakanTugas bisa kita sebut dengan High Order Function
// function "selesai" sebagai argument
// function yang kita simpan sebagai argument disebut Callback yaitu function "selesai"
// sehingga bisa disimpulkan bahwa
// function yang memiliki CALLBACK sebagai argumennya disebut HIGH ORDER FUNCTION
// function kerjakanTugas(matakuliah, selesai) {
//   console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
//   selesai();
// }

// function selesai() {
//   alert("Selesai mengerjakan tugas!");
// }

// kerjakanTugas("Pemrograman Web", selesai);

// contah lain High Order Function

// 1. setTimeout memiliki 2 parameter
// parameter 1 : function (callback)
// parameter 2 : integer
// sehingga setTimeout bisa kita sebut dengan High Order Function
// setTimeout(() => {
//   console.log("Hellow World");
// }, 1000);

// 2. addEventListener memiliki 2 parameter
// parameter 1 : event
// parameter 2 : function (callback)

// Contoh Lain High Order Function
// Function yang mengembalikan (me-return) function lain (bisa diliat di materi closure)

// Kenapa kita harus menggunakan High Order Function
// Abstraksi : agar kode yang dibuat menjadi lebih simple atau sederhana
// let total = 0,
//   count = 1;
// while (count <= 10) {
//   total += count;
//   count += 1; // count++
// }
// console.log(total);
// ------------------- lebih ringkas dengan konsep high order function
// console.log(sum(range(1,10))); // lebih simple, karena kerumitannya kita sembunyikan ke dalam function

// standar
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// dinamis
// function repeatLog(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }

// repeatLog(10);

// lebih dinamis
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

console.log("");

repeat(10, console.log);

console.log("");

repeat(3, alert);



