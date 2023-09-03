// for..in
const mhs = {
  nama: "Yoga",
  umur: 33,
  email: "yoga@gmail.com",
};

// tidak bisa menggunakan for..of
// for (m of mhs) {
//   console.log(m); // is not iterable
// }

// menggunakan for in
for (m in mhs) {
  // m : key/index
  // mengambil index
  console.log(m);
}

for (m in mhs) {
  // mengambil value
  console.log(mhs[m]);
}
