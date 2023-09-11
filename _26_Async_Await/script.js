// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 2000);
// });
// console.log(coba); // pending
// coba.then(() => console.log(coba));

// Async Await

// studi kasus 1
// function cobaPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("selesai");
//     }, 2000);
//   });
// }

// // const coba = cobaPromise();
// // console.log(coba); // pending
// // coba.then(() => console.log(coba));

// async function cobaAsync() {
//   const coba = await cobaPromise();
//   console.log(coba);
// }

// cobaAsync();

// studi kasus 2 - error handling (menangkap reject)
function cobaPromise() {
  return new Promise((resolve, reject) => {
    // const waktu = 3000;
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaan!");
    }
  });
}

// jika menggunakan then dan catch
// const coba = cobaPromise();
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

// jika menggunakan async dan await, gunakan blok try dan catch
async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}

cobaAsync();

// https://www.notion.so/Async-Await-9a08cb88c2fd427da0dcea157827bde2?pvs=4
