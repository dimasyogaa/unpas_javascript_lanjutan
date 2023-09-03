// Object Iterable yang bisa diiterasi oleh for..of:
// A. Array
// B. String
// C. NodeList
// d. Arguments

const mhs = ["Yoga", "Doddy", "Erik"];

// Beberapa cara untuk Looping Array
console.log(
  "Beberapa cara untuk Looping Array\n-------------------------------------------"
);

// 1. for
console.log("============= for");
for (let i = 0; i < mhs.length; i++) {
  console.log(mhs[i]);
}

console.log("");

// 2. foreach - khusus untuk array, tidak bisa digunakan untuk looping string
console.log("============= forEach");
mhs.forEach((m) => console.log(m));

console.log("============= forEach with Index");
mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i + 1}`));

console.log("");

// 3. for..of
// for ( x of y )
// x : nama variable yang digunakan untuk representasi tiap tiap element dari array mahasiswa
// y : nama variable array
console.log("============= for..of");
for (const m of mhs) {
  console.log(m);
}

console.log("============= for..of with index");
// secara default for..of tidak memiliki index
// untuk mengakalinya gunakan method entries() pada array
for (const m of mhs.entries()) {
  console.log(m);
}

console.log("============= for..of with index and destructuring");
for (const [i, m] of mhs.entries()) {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}

console.log("");

// Cara untuk Looping String
console.log(
  "Beberapa cara untuk Looping String\n-------------------------------------------"
);
const nama = "Yoga Dimas";

console.log("============= for..of");
for (const n of nama) {
  console.log(n);
}

console.log("");

// Looping nodeList
console.log(
  "Beberapa cara untuk Looping String\n-------------------------------------------"
);
const liNama = document.querySelectorAll(".nama");

console.log("============= forEach");
liNama.forEach((n) => console.log(n.textContent));
console.log("");

console.log("============= for..of");
for (const n of liNama) {
  console.log(n.innerHTML);
}
console.log("");

// Looping arguments
console.log(
  "Cara untuk Looping arguments pada function\n---------------------------------------------------------"
);
function jumlahkanAngka() {
  //   return arguments.reduce((a, i) => a + i); tidak bisa, karena arguments bukan array
  //   arguments.foreach((a) => jumlah += a); tidak bisa, karena arguments bukan array
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }
  return jumlah;
}
console.log("============= for..of");
console.log(jumlahkanAngka(1, 2, 3, 4, 5));

