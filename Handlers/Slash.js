const client = require("../index");
const { REST, Routes } = require("discord.js");
const fs = require("fs");
require("colors");

module.exports = async () => {
  const slash = [];

  fs.readdirSync("./SlashCommands/").forEach((dir) => {
    const commands = fs
      .readdirSync(`./SlashCommands/${dir}`)
      .filter((file) => file.endsWith(".js"));
    for (let file of commands) {
      let pull = require(`../SlashCommands/${dir}/${file}`);

      if (pull.name) {
        slash.push(pull);
        client.slash.set(pull.name, pull);
        console.log(`[HANDLER - SLASH] Loaded a file : ${pull.name}`.green);
      } else {
        console.log(
          `[HANDLER - SLASH] Couldn't load the file ${file}, missing module name value.`
            .red
        );
        continue;
      }
    }
  });

  if (!process.env.Client_ID) {
    console.log(
      "[CRUSH] You have to provide your client ID in config file".red + "\n"
    );
    return process.exit();
  }

  const rest = new REST({ version: "10" }).setToken(process.env.Token);

  await rest
    .put(Routes.applicationCommands(process.env.Client_ID), { body: slash })
    .then(() => {
      console.log("----------------------------------------".magenta);
      console.log(
        `[HANDLER - SLASH] Slash commands has been registered successfully to all the guilds`
          .magenta.bold
      );
      console.log("----------------------------------------".magenta);
    });
};