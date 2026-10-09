const student = [
  "Afif",
  "Rizal",
  "Zakky",
  "Bando",
  "Alvin",
  "Rifai",
  "Chandra",
];
// indexof
console.log(student.indexOf("Afif"));

// manual indexof
const seacrhIndex = "Afif";
for (let i = 0; i < student.length; i++) {
  if (seacrhIndex === student[i]) {
    console.log(`${student[i]} Index ke-${i}`);
    break;
  } else {
    console.log("Data tidak ditemukan");
  }
}
