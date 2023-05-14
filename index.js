const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
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
client.aliases = new Collection();
client.slashCommands = new Collection();
client.buttons = new Collection();
client.prefix = process.env.Prefix;

module.exports = client;

fs.readdirSync("./Handlers").forEach((handler) => {
  require(`./Handlers/${handler}`)(client);
});

client.login(process.env.Token);