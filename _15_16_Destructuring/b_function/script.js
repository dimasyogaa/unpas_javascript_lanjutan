// Destructuring Function

// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }

// // const jumlah = penjumlahanPerkalian(2, 3)[0];
// // const kali = penjumlahanPerkalian(2, 3)[1];

// // menggunakan destructuring assignment
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);

// console.log(jumlah);
// console.log(kali);

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b];
// }

// const [tambah, kurang, kali, bagi = "tidak ada"] = kalkulasi(2, 3); // harus urut
// console.log(bagi);

// DESTRUCTURING RETURN VALUE
function kalkulasi(a, b) {
  return {
    tambah2: a + b,
    kurang2: a - b,
    kali2: a * b,
    bagi2: a / b,
  };
}

const { bagi2, tambah2, kali2, kurang2 } = kalkulasi(2, 3);
console.log(kurang2);

console.log("");

// DESTRUCTURING FUNCTION ARGUMENTS
const mhs3 = {
  nama: "Yoga Dimas Pambudi",
  umur: 24,
  email: "yogadimaspambudi@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// Cara 1
function cetakMhs(nama, umur) {
  return `Halo, nama saya ${nama}, dan saya berumur ${umur} tahun.`;
}

console.log("Cara 1");
console.log(cetakMhs(mhs3.nama, mhs3.umur));
console.log("");

// Cara 2
function cetakMhs2(mhs3) {
  return `Halo, nama saya ${mhs3.nama}, dan saya berumur ${mhs3.umur} tahun.`;
}

console.log("Cara 2");
console.log(cetakMhs2(mhs3));
console.log("");

// cara 3 - menggunakan destructuring
// 3.1
function cetakMhs31({ nama, umur }) {
  return `Halo, nama saya ${nama}, dan saya berumur ${umur} tahun.`;
}

console.log("Cara 3 - kasus 1");
console.log(cetakMhs31(mhs3));
console.log("");

// 3.2
function cetakMhs32({ nama, umur, nilai }) {
  return `Halo, nama saya ${nama}, dan saya berumur ${umur} tahun, dan nilai UAS saya adalah ${nilai.uas}.`;
}

console.log("Cara 3 - kasus 2");
console.log(cetakMhs32(mhs3));
console.log("");

// 3.3
function cetakMhs33({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, dan saya berumur ${umur} tahun, dan nilai UAS saya adalah ${uas}.`;
}

console.log("Cara 3 - kasus 3");
console.log(cetakMhs33(mhs3));
console.log("");

// 3.4
function cetakMhs34({ nama, umur, ...value}) {
  return `Halo, nama saya ${nama}, dan saya berumur ${umur} tahun, dan nilai UAS saya adalah ${value.nilai.uas}.`;
}

console.log("Cara 3 - kasus 4");
console.log(cetakMhs34(mhs3));
console.log("");
