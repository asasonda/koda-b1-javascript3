// 5 buah built-in function

// 1. Number() -> menjadikan string angka menjadi number
// contoh penggunaanya
let jumlah = "10";
console.log(Number(jumlah));
console.log(typeof Number(jumlah));

// 2. String() -> menjadikan number, bolean menjadi string
// contoh penggunaanya
let number = true;
let bolean = true;
console.log(String(number));
console.log(String(bolean));
console.log(typeof String(number));

// 3. isNaN() -> cek apakah value Bukan Number
// mengembalikan nilai true or false
// contoh penggunaanya
console.log(isNaN("Hallo"));
console.log(isNaN(4));

// 4. BigIn() -> berguna saat angka bulat terlalu besar untuk ditampilkan lalu menggantinya dengan n
console.log(BigInt(1234567890));

// 5. isFinite -> kegunaanya sama seperti isNaN yaitu untuk cek apakah argument yang diberikan adalah number
// bukan string atau NaN
// mengembalikan nilai true or false
// contoh penggunaanya
console.log(isFinite(32435));
