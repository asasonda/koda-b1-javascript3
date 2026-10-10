const url = "https://jsonplaceholder.typicode.com/users";

function lowerString(string) {
  let stringArray = string;
  let emailLower = "";
  for (let p = 0; p < stringArray.length; p++) {
    let huruf = stringArray[p];
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
    emailLower += huruf;
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
