// 1. HTML Fragment
// const mhs = {
//     nama: "Yoga Dimas",
//     umur: 22,
//     nrp: "043040023",
//     email: "yogadimaspambudi@gmail.com",
//   };

//   const el = `<div class="mhs">
//       <h2>${mhs.nama}</h2>
//       <span class="nrp">${mhs.nrp}</span>
//   </div>`;

// 2. Looping
// const mhs = [
//   {
//     nama: "Yoga Dimas",
//     email: "yogadimaspambudi@gmail.com",
//   },
//   {
//     nama: "Doddy Ferdi",
//     email: "doddy@gmail.com",
//   },
//   {
//     nama: "Erik",
//     email: "erik@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
//     ${mhs
//       .map(
//         (m) => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`
//       )
//       .join("")}
// </div>`;

// 3. Conditionals
// ternary
// const lagu = {
//   judul: "Tetap Dalam Jiwa",
//   penyanyi: "Isyana Sarasvati",
// //   feat: "Rayi Putra",
// };

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''} </li>
//     </ul>
// </div>`;

// 4. Nested
const mhs = {
  nama: "Yoga Dimas",
  semester: 5,
  mataKuliah: [
    "Rekayasa Web",
    "Analisis dan Perancangan Sistem Informasi",
    "Pemrograman Sistem Interaktif",
    "Perancangan Sistem Berorientasi Object",
  ],
};

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
        ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}

</div>`;

document.body.innerHTML = el;
