const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
console.log("");

// filter, map, dan reduce menghasilkan array baru

// FILTER (seperti digunakan untuk operasi boolean)
// mencari angka >= 3

// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// filter
// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });

// arrow function
const newAngkaFilter = angka.filter((a) => a >= 3);
console.log("FILTER");
console.log(angka);
console.log(newAngkaFilter);

console.log("");

// MAP (seperti digunakan untuk operasi matematika per elemen)
// kalikan semua angka dengan 2
const newAngkaMap = angka.map((a) => a * 2);
console.log("MAP");
console.log(angka);
console.log(newAngkaMap);

console.log("");

// REDUCE (seperti digunakan untuk operasi pada semua elemen array)
// jumlahkan seluruh elemen pada array
// reduce (function(accumulator, currentValue), nilaiAwal)
// accumulator : hasil dari perhitungan antar element
// currentValue : elemen yang dioperasi pada waktu saat ini
// nilai awal : secara default bernilai 0
// nilai awal + elemen elemen array
// 5 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// default niali
const newAngkaReduce = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  5
);
console.log("REDUCE");
console.log(angka);
console.log(newAngkaReduce);

console.log("");

// METHOD CHAINING = Method Berantai
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka
  .filter((a) => a > 5) // 8, 9, 9
  .map((a) => a * 3) // 24, 27, 27
  .reduce((acc, cur) => acc + cur); // 78

console.log("CHAINING METHOD");
console.log(angka);
console.log(hasil); // 78

console.log("");
