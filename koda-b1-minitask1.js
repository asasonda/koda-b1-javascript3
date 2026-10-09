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

function temukan(nama) {
    for (let i = 0; i < student.length; i++) {
        if (nama === student[i]) {
            console.log(`${student[i]} Index ke-${i}`);
            return;
        }
    }
}
nama("Rifai", temukan);
