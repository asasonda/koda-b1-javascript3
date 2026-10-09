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
    const pelajar = [...student]
    for (let i = 0; i < pelajar.length; i++) {
        if (nama === pelajar[i]) {
            console.log(`${pelajar[i]} Index ke-${i}`);
            return;
        }
    }
}
nama("Bando", temukan);
