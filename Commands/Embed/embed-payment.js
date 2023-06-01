const { EmbedBuilder, Client, Message } = require("discord.js");

module.exports = {
  name: "embed-payment",
  aliases: [""],
  description: "",
  userPermissions: ["SendMessages"],
  botPermissions: ["ViewChannel"],
  ownerOnly: true,
  /**
   * @param {Client} client
   * @param {Message} message
   */
  run: async (client, message) => {
    message.delete();
    message.channel.send({
      embeds: [
        new EmbedBuilder()
          .setColor("LuminousVividPink")
          .setAuthor({
            name: "RD SHOP | Payment",
            iconURL: client.user.displayAvatarURL(),
          })
          .setTitle("Payment Methods")
          .addFields(
            {
              name: "**<:ProbotCredit:1113538694322847904> ProBot Credit**",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:Paypal:1105764684465983581> PayPal**",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:Payeer:1105153290271981578> Payeer**",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:Bitcoin:1105153352985215040> Bitcoin**",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:Litecoin:1105388168380948490> Litecoin**",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:Tether:1105388194733764698> Tether**",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:Ethereum:1105388224135839814> Ethereum**",

              value: "\u200B",

              inline: false,
            }
          )
          .setThumbnail(
            "https://cdn.discordapp.com/icons/1104679214302642237/3667f32fba23aab056cddd7e14f51c1d.png?size=2048"
          )
          .setFooter({
            text: "RD SHOP",
            iconURL: client.user.displayAvatarURL(),
          }),
      ],
    });
  },
};