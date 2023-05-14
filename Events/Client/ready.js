const client = require('../../index');

client.once("ready", () => {
    console.log(`Logged in as bot ${client.user.tag}`);
    client.user.setStatus("online");
});