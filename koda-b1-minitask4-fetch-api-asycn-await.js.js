const url = "https://jsonplaceholder.typicode.com/users";

function lowerString() {
  console.log(arrayEmails);
}

async function users() {
  try {
    const response = await fetch(url);
    const api = await response.json();
    const arrayEmails = [];
    api.forEach((data) => {
      arrayEmails.push(data.email);
    });
    // console.log(arrayEmails)
    arrayEmails.forEach((array, index) => {
      console.log(`${index + 1}. ${array.toLowerCase()}`);
    });
    console.log("===================");

    let arrayBaru = [];
    api.forEach((tes) => {
      arrayBaru.push(tes.email);
    });
    // lower case tanpa built-in method
    for (let j = 0; j < arrayBaru.length; j++) {
      let emailLower = "";
      for (let p = 0; p < arrayBaru[j].length; p++) {
        let huruf = arrayBaru[j][p];
        if (p === 0) {
          if (huruf === "S") {
            huruf = "s";
          } else if (huruf === "N") {
            huruf = "n";
          } else if (huruf === "J") {
            huruf = "j";
          } else if (huruf === "L") {
            huruf = "l";
          } else if (huruf === "K") {
            huruf = "k";
          } else if (huruf === "T") {
            huruf = "t";
          } else if (huruf === "C") {
            huruf = "c";
          }
        }
        emailLower += huruf
      }
      console.log(emailLower)
    }
  } catch (err) {
    console.error("err");
  }
}

users();
