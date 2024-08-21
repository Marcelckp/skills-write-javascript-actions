const { getJoke } = require("./joke");
const core = require("@actions/core");

async function run() {
  const joke = await getJoke();
  console.log(joke); // This will hold the joke fetched from the API
  core.setOutput("joke-output", joke);
}

run();