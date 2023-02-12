const axios = require("axios");

const headers = {
  "Content-Type": "application/json"
};

const body = JSON.stringify({
  providerCallbackHost: "https://webhook.site/7c6c8e50-bc68-41f1-9199-e7da5dac7ff3"
});

axios
  .post("http://localhost:3000/api", body, {
    headers: headers
  })
  .then(response => {
    console.log(response.status);
  })
  .catch(error => {
    console.error("There was a problem with the axios operation:", error.response.status);
  });
