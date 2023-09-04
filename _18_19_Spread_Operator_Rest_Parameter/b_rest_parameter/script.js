// REST PARAMETER
// rest parameter harus diakhir formal parameter

function myFunc(a, b, ...myArgs) {
  return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
}

function myFunc2(...myArgs) {
  return `myArgs = ${myArgs}`;
  //   return Array.from(arguments);
  //   return [...arguments];
}

console.log(myFunc(1, 2, 3, 4, 5));
console.log(myFunc2(6, 7, 8, 9, 10));

console.log("");

// studi kasus
function jumlahkan(...angka) {
  // cara 1
  //   let total = 0;
  //   for (const a of angka) {
  //     total += a;
  //   }
  //   return total;

  //   cara 2
  return angka.reduce((a, b) => a + b);
}

console.log(jumlahkan(1, 2, 3, 4, 5));

console.log("");

// Array destructuring
const kelompok1 = ["Yoga", "Dimas", "Pambudi", "Yeo", "Tri"];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);
console.log(wakil);
console.log(anggota);

console.log("");

// Object destructuring
const team = {
  pm: "Yoga",
  frontEnd1: "Dimas",
  frontEnd2: "Erik",
  backEnd: "Fajar",
  ux: "Hendra",
  devOps: "Ferry",
};

const { pm, ...myTeam } = team;
console.log(pm);
console.log(myTeam);

console.log("");

// Filtering Parameter
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("number", 1, 2, "Yoga", false, 10, true, "Doddy"));
console.log(filterBy("string", 1, 2, "Yoga", false, 10, true, "Doddy"));
console.log(filterBy("boolean", 1, 2, "Yoga", false, 10, true, "Doddy"));
