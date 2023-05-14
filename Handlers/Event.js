const fs = require("fs");
var AsciiTable = require("ascii-table");
var table = new AsciiTable();
table.setHeading("Events", "Stats").setBorder("|", "=", "0", "0");

module.exports = (client) => {
  fs.readdirSync("./Eents/")
    .filter((file) => file.endsWith(".js"))
    .forEach((event) => {
      require(`../Events/${event}`);
      table.addRow(event.split(".js")[0], "✅");
    });
  console.log(table.toString());
};