// Descructuring Variable / Assignment

// Destructuring Array
const perkenalan = ["Halo", "nama", "saya", "Yoga Dimas"];

const [salam, satu, dua, nama] = perkenalan;
console.log(salam);
console.log(satu);
console.log(dua);
console.log(nama);

console.log("");

// skipping items
const [salam2, , , nama2] = perkenalan;
console.log(salam2);
console.log(nama2);

console.log("");

// swap items
let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);

console.log("");

// return value pada function
function coba() {
  return [3, 4];
}

const [c, d] = coba();
console.log(c);
console.log(d);

console.log("");

// Rest Parameter
const [e, ...values] = [5, 6, 7, 8, 9, 10];
console.log(e);
console.log(values);

console.log("");

// Desttucturing Obejct
const mhs = {
  nama3: "Yoga Dimas Pambudi",
  umur3: 19,
};

const { nama3, umur3 } = mhs;
console.log(nama3);
console.log(umur3);

console.log("");

// Assignment tanpa deklarasi object
({ nama4, umur4 } = {
  nama4: "Yoga Dimas",
  umur4: 22,
});
console.log(nama4);
console.log(umur4);

console.log("");

// Assign ke variabel baru
const { nama3: iniNama, umur3: iniUmur } = mhs;
console.log(iniNama);
console.log(iniUmur);

console.log("");

// memberikan default value
const { nama3: namaBaru, email3 = "yogadimaspambudi@gmai.com" } = mhs;
console.log(iniNama);
console.log(email3);

console.log("");

// memberi niali default dan assign ke variabel baru
const {
  nama3: iniNamaBaru,
  umur3: iniUmurBaru = 34,
  email3: emailBaru = "yogadimaspambudi@gmai.com",
} = mhs;
console.log(iniNamaBaru);
console.log(iniUmurBaru);
console.log(emailBaru);

console.log("");

// rest parameter
const { nama3: nama5, ...value } = mhs;
console.log(nama5);
console.log(value); //object
console.log(value.umur3);

console.log("");

// mengambil field pada object,
// setelah dikirim sebagai parameter untuk function
const mhs2 = {
  id: 123,
  nama: "Pambudi",
  umur: 33,
  email: "pambudi@gmail.com",
};

function getIdMhs2({ id, nama }) {
  return `${id} ${nama}`;
}

console.log(getIdMhs2(mhs2));
