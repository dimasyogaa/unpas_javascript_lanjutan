// ambil semua elemen video, ubah nodeList menjadi Array agar bisa di filter, map dan reduce
const videos = Array.from(document.querySelectorAll("[data-duration]"));
// console.log(videos); // 12

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  // console.log(jsLanjut); // 8

  // ambil durasi masing-masing video
  .map((item) => item.dataset.duration)
  //  console.log(jsLanjut); // (8) ['11:18', '21:40', '12:10', '20:43', '26:38', '17:33', '10:39', '17:31']

  // ubah durasi menjadi float, lalu ubah menit menjadi detik
  .map((waktu) => {
    // 11:18 -> [11, 18] split, lalu ubah durasi menjadi float
    const parts = waktu.split(":").map((part) => parseFloat(part));

    // ubah menit menjadi detik
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik, dan lalukan pembulatan ke bawah atau taksiran rendah
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

const jmlVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

const pJumlahVideo = document.querySelector(".jumlah-video");
pJumlahVideo.textContent = `${jmlVideo} Video.`;
