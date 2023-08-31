// 1. Template Literal/Template String
// const nama = "Yoga";
// const umur = "22";
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);

// 2. Embedded Expressions
// console.log(`${1 + 1}`);
// console.log(`${alert("halo!")}`);
// const x = 10;
// console.log(`${(x % 2 == 0) ? "Genap" : "Ganjil"}`);

// 3. HTML Fragment
const mhs = {
  nama: "Yoga Dimas",
  umur: 22,
  nrp: "043040023",
  email: "yogadimaspambudi@gmail.com",
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);
