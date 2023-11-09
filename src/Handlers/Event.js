const fs = require("fs");
require("colors");

module.exports = (client) => {
  console.log("----------------------------------------".yellow);

  fs.readdirSync("./src/Events/").forEach((dir) => {
    const commands = fs
      .readdirSync(`./src/Events/${dir}`)
      .filter((file) => file.endsWith(".js"));
    for (let file of commands) {
      let pull = require(`../Events/${dir}/${file}`);
      if (pull.name) {
        client.events.set(pull.name, pull);
        console.log(`[HANDLER - EVENTS] Loaded a file : ${pull.name}`.green);
      } else {
        console.log("\n" + "----------------------------------------".red);
        console.log(
          `[HANDLER - EVENTS] Couldn't load the file ${file}, missing name or aliases`
            .red.bold
        );
        console.log("----------------------------------------".red);
        continue;
      }
    }
  });
  console.log("----------------------------------------".yellow);
};