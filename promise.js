const axios = require("axios");
let url = "https://jsonplaceholder.typicode.com/posts ";

axios
  .get(url)
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log(err.message);
  });
