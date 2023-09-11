// // versi jquery
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=b236e4a4&s=Avengers",
//   success: (movies) => console.log(movies),
// });

// // versi vanilla javascript
// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };

// // menjalankan ajax
// xhr.open("get", "http://www.omdbapi.com/?apikey=b236e4a4&s=Avengers");
// xhr.send();

// cara lebih simple vanilla javascript - fetch
// const fetchMovies = fetch("http://www.omdbapi.com/?apikey=b236e4a4&s=Avengers");
// console.log(fetchMovies); // promise

// fetch mengembalikan promise

// mengambil data
// const fetchMovies = fetch("http://www.omdbapi.com/?apikey=b236e4a4&s=Avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// Promise (janji)
// sebuah objek yang merepresentasikan keberhasilan/kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending) - keadaan
// callback (resolve / reject / finally) - fungsi callback
// resolve : ketika janji terpenuhi
// reject : ketika janji tidak terpenuhi
// finally : ketika waktu tunggunya selesai, baik itu terpenuhi maupun tidak terpenuhi
// aksi (then / catch)
// then akan menjalankan resolve
// catch akan menjalankan reject

// CONTOH 1
// let ditepati = true;
// // let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati!");
//   } else {
//     reject("Ingkar janji...");
//   }
// });

// console.log(janji1);

// console.log("");

// // mengambil resolve dan reject menggunakan then dan catch
// janji1
//   .then((response) => console.log("OK! : " + response))
//   .catch((response) => console.log("NOT OK! : " + response));

// CONTOH 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve("Tidak ditepati setelah beberapa waktu!");
//     }, 2000);
//   }
// });

// console.log("mulai");
// console.log(
//   janji2
//     .then(() => console.log(janji2))
//     .finally(() => console.log("selesai menunggu"))
// );
// console.log("selesai");

// finally biasa digunakan untuk animasi loading

// Promise.all()
// digunakan untuk menjalankan semua promise
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Yoga Dimas",
        pemeran: "Doddy, Erik",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        temp: 26,
        kondisi: "Cerah Berawan",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca]).then((response) => console.log(response)); // array di dalam array

console.log("");
// memisahkan array di dalam array
Promise.all([film, cuaca]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
});
