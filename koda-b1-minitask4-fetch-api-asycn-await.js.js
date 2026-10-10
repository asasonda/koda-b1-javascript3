const url = "https://jsonplaceholder.typicode.com/users";

function lowerString(stringIndexEmail) {
  let hurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let hurufKecil = "abcdefghijklmnopqrstuvwxyz";
  let emailLower = "";

  for (let p = 0; p < stringIndexEmail.length; p++) {
    let huruf = stringIndexEmail[p];
    let kaloKetemu = false;
    for (let j = 0; j < hurufBesar.length; j++) {
      if (huruf === hurufBesar[j]) {
        emailLower += hurufKecil[j];
        kaloKetemu = true;
        break;
      }
    }
    if (kaloKetemu === false) {
      emailLower += huruf;
    }
  }
  console.log(emailLower);
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
    console.log(arrayEmails);
    for (let y = 0; y < arrayEmails.length; y++) {
      lowerString(arrayEmails[y]);
    }

  } catch (err) {
    console.error("err");
  }
}

users();
