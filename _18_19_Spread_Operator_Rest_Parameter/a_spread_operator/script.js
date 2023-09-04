// // Spread Operator
// // memecah iterables menjadi single element

// // const mhs = ["Yoga", "Dimas", "Pambudi"];
// // console.log(...mhs); // Yoga Dimas Pambudi
// // console.log(...mhs[0]); // Y o g a

// // contoh penggunaan
// console.log(
//   "contoh penggunaan spread operator\n========================================="
// );

// // 1. menggabungkan 2 array
// console.log("1. Menggabungkan 2 Array\n----------------------------------");
// const mhs = ["Yoga", "Dimas", "Pambudi"];
// const dosen = ["Yeo", "Tri", "Pamungkas"];

// const orang = [...mhs, ...dosen];
// console.log(orang); // (6) ['Yoga', 'Dimas', 'Pambudi', 'Yeo', 'Tri', 'Pamungkas']

// // // sama seperti concat
// // const orang2 = mhs.concat(dosen);
// // console.log(orang2);

// // // bukan seperti ini, karena ini berarti array di dalam array
// // const orang3 = [mhs, dosen];
// // console.log(orang3); // (2) [Array(3), Array(3)]

// // spread operator lebih fleksibel dibanding concat
// const orang4 = [...mhs, "Pratama", ...dosen];
// console.log(orang4); // (7) ['Yoga', 'Dimas', 'Pambudi', 'Pratama', 'Yeo', 'Tri', 'Pamungkas']

// console.log("");

// // 2. Menyalin(copy) Array
// console.log("2. Menyalin(copy) Array\n----------------------------------");
// const mhs2 = ["Yoga", "Dimas", "Pambudi"];
// // const mhs21 = mhs2; ini bukan cara copy, karena mhs21 reference ke mhs2, tidak membuat array baru, sehingga jika terjadi perubahan, maka mhs2 juga akan berpengaruh
// // mhs21[0] = "Fajar";
// // cara copy array yang benar menggunakan spread operator
// const mhs21 = [...mhs2];
// mhs21[0] = "Fajar";
// console.log(mhs2); // tetap, tidak berubah
// console.log(mhs21); // berubah

// console.log("");

// 3
console.log("3\n----------------------------------");
const liMhs = document.querySelectorAll("li");

// cara looping biasa - push
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }

// cara looping menggunakan spread operator dengan map
// nodelist dikonversi menjadi array dengan bantuan spread operator
const mhs = [...liMhs].map((m) => m.textContent);

console.log(mhs);

console.log("");

// 4
console.log("4\n----------------------------------");
const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
// console.log(huruf); // (7) ['P', 'a', 'm', 'b', 'u', 'd', 'i']
nama.innerHTML = huruf;
