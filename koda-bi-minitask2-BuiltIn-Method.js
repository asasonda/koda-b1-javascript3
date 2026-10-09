// 20 buah built-in method

// 1. filter() -> filter array sesuai dengan kondisi
// contoh penggunaanya misalnya filter data array yang panjang karakternya > 5
const nama = ["afif", "rizal", "bando", "zakky", "chandra"];
const filter = nama.filter((cek) => cek.length > 5);
console.log(filter);

// 2. from() -> string menjadi array sesuai indexnya ex: ['A','f' dst]
// contoh penggunaanya
console.log(Array.from("Afif"));

// 3. map() -> membuat array baru yang disimpan ke dalam variabel baru dan array tersebut dibisa dirubah
// dan disimpan dalam variabel baru (manipulasi array tapi disimpan ke dalam variabel baru)
// contoh penggunaanya
const tampilkan = nama.map((student) => student);
console.log(tampilkan);

// 4. foreach() -> looping array dan juga memiliki parameter index
// contoh penggunaanya
nama.forEach((x, index) => console.log(index, x));

// 5. indexOf() -> mencari index ke-berapa didalam string
// contoh penggunaanya
const student = nama.indexOf("zakky");
console.log(`zakky index ke-${student}`);

// 6. push() -> method push digunakan untuk memasukan element atau push ke dalam array
// biasanya akan push pada index terkahir array
// contoh penggunaanya
nama.push("alvin");
console.log(nama);

// 7. slice() -> untuk manipulasi string dan bisa juga digunakan untuk push atau menghapus ke dalam array
// contoh penggunaanya
console.log(nama[0].slice(0, 2));

// 8. join() -> menggabungkan seluruh element pada array menjadi sebuah string baru
// contoh penggunaanya
console.log(nama.join(","));

// 9. split() -> manipulasi string dan dapat mengambil huruf sesuai index sampai dengan panjang hurufnya
// contoh penggunaanya
const string = "Koda Academy";
console.log(string.substring(0, 5));

// 10. toLowerCase() -> untuk membuat string menjadi huruf kecil semua
// contoh penggunaanya
console.log(string.toLowerCase());

// 11. toUpperCase -> untuk membuat string menjadi huruf besar semua
// contoh penggunaanya
console.log(string.toUpperCase());

// 12. include -> cek apakah nilai/elemet/value dari parameter include ada dalam sebuah array
// bisa juga melakukan cek huruf dalam sebuah string
// mengembalikan nilai true atau false jika nilainya benar terkandung dalam sebuah array atau string
// contoh penggunaanya
console.log(nama.includes("afif"));

// 13 repeat() -> mencetak/mengulang nilai atau string sebanyak n kali untuk ditampilkan
// contoh penggunaanya
console.log(`hallo, ${nama[0].repeat(3)}`);

// 14 replace() -> untuk menggantikan string lama ke string baru atau replace(mengganti)
// contoh penggunaanya
const hello = "say hello world";
console.log(hello.replace("world", nama[0]));

// 15 padstart() -> menambahkan string atau karakter tertentu di awal/depan sebuah string
// contoh penggunaanya
const rekening = "1234567866690";
const potongDulu = rekening.slice(-4);
console.log(potongDulu.padStart(13, "*"));

// 16. padEnd() -> menambahkan string atau karakter tertentu di akhir/belakang sebuah string
// contoh penggunaanya
const loading = "Loading";
console.log(loading.padEnd(10, "."));

// 17. concat() -> menggabungkan beberapa string menjadi 1 string
// contoh penggunaanya
console.log(string.concat(" ", rekening, loading));

// 18 charAt() -> mengembalikan/cetak huruf atau element sesuai index yang dituju
// contoh penggunaanya ex: index 3 dari variabel loading
console.log(loading.charAt(3));

// 19 pop() -> menghapus element pada array dan biasanya menghapus dari akhir/belakang index array
// contoh penggunaanya
console.log(nama.pop());

// 20 sort() -> menyusung element array sesuai abjad
// contoh penggunaanya
console.log(nama.sort());
