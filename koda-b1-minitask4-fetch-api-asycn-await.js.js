const url = "https://jsonplaceholder.typicode.com/users";

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
  } catch (err) {
    console.error("err");
  }
}

users();
