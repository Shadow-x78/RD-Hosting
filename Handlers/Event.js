const { readdirSync } = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Events");
table.setHeading("Event", " Load status");

module.exports = (client) => {
  readdirSync("./Events/").forEach((dir) => {
    const events = readdirSync(`./Events/${dir}/`).filter((file) =>
      file.endsWith(".js")
    );
    for (let file of events) {
      let pull = require(`../Events/${dir}/${file}`);
      if (pull.name) {
        client.events.set(pull.name, pull);
        table.addRow(file, "✔️ -> Event Loaded");
      } else {
        table.addRow(file, "❌ -> Event Error");
        continue;
      }
    }
  });
  console.log("Event Handler is ready");
};