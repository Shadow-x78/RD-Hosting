const fs = require("fs");
const AsciiTable = require("ascii-table");
const table = new AsciiTable();
table.setHeading("Commands", "Stats").setBorder("|", "=", "0", "0");

module.exports = (client) => {
  fs.readdirSync("./Commands/").forEach((dir) => {
    const files = fs
      .readdirSync(`./Commands/${dir}/`)
      .filter((file) => file.endsWith(".js"));
    if (!files || files.length <= 0) console.log("Commands - 0");
    files.forEach((file) => {
      let command = require(`../Commands/${dir}/${file}`);
      if (command) {
        client.commands.set(command.name, command);
        if (command.aliases && Array.isArray(command.aliases)) {
          command.aliases.forEach((alias) => {
            client.aliases.set(alias, command.name);
          });
        }
        table.addRow(command.name, "✅");
      } else {
        table.addRow(file, "⛔");
      }
    });
  });
  console.log(table.toString());
};