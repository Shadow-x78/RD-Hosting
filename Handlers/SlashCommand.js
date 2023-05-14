const fs = require("fs");

const { Routes } = require("discord-api-types/v10");
const { REST } = require("@discordjs/rest");

const AsciiTable = require("ascii-table");
const table = new AsciiTable()
  .setHeading("Slash Commands", "Stats")
  .setBorder("|", "=", "0", "0");

const rest = new REST({ version: "10" }).setToken(process.env.Token);

module.exports = (client) => {
  const slashCommands = [];

  fs.readdirSync("./SlashCommands/").forEach(async (dir) => {
    const files = fs
      .readdirSync(`./SlashCommands/${dir}/`)
      .filter((file) => file.endsWith(".js"));

    for (const file of files) {
      const slashCommand = require(`../SlashCommands/${dir}/${file}`);
      if (slashCommand.name) {
        client.slashCommands.set(slashCommand.name, slashCommand);
        slashCommands.push(slashCommand);
        table.addRow(file.split(".js")[0], "✅");
      } else {
        table.addRow(file.split(".js")[0], "⛔");
      }
    }
  });
  console.log(table.toString());

  (async () => {
    try {
      await rest.put(Routes.applicationCommands(process.env.Client_ID), {
        body: slashCommands,
      });
      console.log("Slash Commands • Registered");
    } catch (error) {
      console.log(error);
    }
  })();
};