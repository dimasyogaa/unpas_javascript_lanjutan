// Tagged Templates
// memecah setiap string yang ada di dalamnya yang mana dipisahkan oleh expression
// expression akan masuk ke parameter berikutnya
// rest parameter :
// - menampung seluruh expression yang ada di dalam template literal
// - menjadi sebuah array yang isinya semua expression yang ada di dalam template literalsnya
// penulisan rest parameter = ...namaParameter
// const nama = "Yoga Dimas";
// const umur = 22;

// function coba(strings, ...values) {
//   // strings : untuk mengambil string biasa
//   //   return strings;
//   // ...values : untuk mengambil expressions
//   //   return values;
//   // -------------------------------------------------
//   //   let result = "";
//   //   strings.forEach((str, i) => {
//   //     result += `${str}${values[i] || ''}`;
//   //   });
//   //   return result;
//   // ---------- cara lebih ringkas ----------
//   return strings.reduce(
//     // (result, str, i) => `${result}-${str}*${values[i] || ""}`,
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Note
// foreach : tidak menghasilkan array baru
// forEach(elemen, index)
// map : menghasilkan array baru

// Studi Kasus - HIGHLIGHT
const nama = "Yoga Dimas";
const umur = 22;
const email = "yogadimaspambudi@gmail.com"

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="h1">${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}.`;

document.body.innerHTML = str;
