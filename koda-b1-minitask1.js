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
function nama(input, callback) {
  return callback(input);
}

nama("Afif", temukan);

function temukan(nama) {
  for (let i = 0; i < student.length; i++) {
    if (nama === student[i]) {
      console.log(`${student[i]} Index ke-${i}`);
      break;
    } else {
      console.log("Data tidak ditemukan");
    }
  }
}
