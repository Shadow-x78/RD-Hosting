const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
} = require("discord.js");
require("colors");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.MessageContent,
  ],
  shards: "auto",
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Reaction,
    Partials.GuildScheduledEvent,
    Partials.User,
    Partials.ThreadMember,
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
