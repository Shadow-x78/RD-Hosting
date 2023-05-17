const { Client, Partials, Collection } = require("discord.js");
require("colors");
require("dotenv").config();

const client = new Client({
  intents: [
    "Guilds",
    "GuildMessages",
    "GuildPresences",
    "GuildMessageReactions",
    "DirectMessages",
    "MessageContent",
    "GuildVoiceStates",
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction,
  ],
});

client.commands = new Collection();
client.events = new Collection();
client.slash = new Collection();
client.aliases = new Collection();

module.exports = client;

["Command", "Event", "Slash"].forEach((file) => {
  require(`./Handlers/${file}`)(client);
});

if (!process.env.Token) {
  console.log(
    "[WARN] Token for discord bot is required! put your token in config file"
      .yellow.bold + "\n"
  );
  return process.exit();
}

client.login(process.env.Token).catch((err) => {
  console.log(
    "[CRUSH] Something went wrong while connecting to your bot" + "\n"
  );
  console.log("[CRUSH] Error from DiscordAPI :" + err);
  process.exit();
});

process.on("unhandledRejection", async (err) => {
  console.log(`[ANTI - CRUSH] Unhandled Rejection : ${err}`.red.bold);
});