const request = require("request-promise");

const requestOptions = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
  json: true,
};

async function getJoke() {
  const res = await request(requestOptions);
  return res.joke;
}

module.exports = { getJoke };