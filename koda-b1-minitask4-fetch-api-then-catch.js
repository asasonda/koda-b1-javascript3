const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const arrayEmails = [];
    data.forEach((item) => {
      arrayEmails.push(item.email);
    });
    arrayEmails.forEach((array, index) => {
      console.log(`${index + 1}. ${array.toLowerCase()}`);
    });
  })
  .catch((err) => {
    console.error("Error: ", err);
  });
