const express = require("express");
const app = express();
const axios = require("axios");
const port = 3000;

app.use(express.json());

app.post("/api", (req, res) => {
// Replace this with your API request logic
const headers = {
"X-Reference-Id": "7ec87fb2-c8b0-4974-a7d6-18dec886a9f7",
"Content-Type": "application/json",
"Ocp-Apim-Subscription-Key": "59a6dcafdd834b34bd31ba340aaf9c8b"
};

const data = {
providerCallbackHost: "https://webhook.site/7c6c8e50-bc68-41f1-9199-e7da5dac7ff3"
};

axios
.post("https://sandbox.momodeveloper.mtn.com/v1_0/apiuser", data, {
headers: headers
})
.then(response => {
res.json(response.data);
})
.catch(error => {
console.error("There was a problem with the axios operation:", error);
res.status(500).send({ error: "An error occurred while making the API request" });
});
});

app.listen(port, () => {
console.log(`Server is listening on port ${port}`);
});