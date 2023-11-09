const client = require("../../index");
require("colors");

module.exports = {
  name: "ready",
};

client.once("ready", async () => {
  console.log(`[READY] ${client.user.tag} is up and ready to go.`.bold);
  console.log("----------------------------------------".white);
});