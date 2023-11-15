const { EmbedBuilder, Client, Message } = require("discord.js");

module.exports = {
  name: "embed-payment",
  aliases: ["em-payment"],
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
          .setTitle("Payment Methods :")
          .addFields(
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
            }
          )
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/1174305037493747782.webp"
          )
          .setFooter({
            text: "RD SHOP",
            iconURL: client.user.displayAvatarURL(),
          }),
      ],
    });

    message.channel.send({
      embeds: [
        new EmbedBuilder()
          .setColor("LuminousVividPink")
          .setAuthor({
            name: "RD SHOP | Payment",
            iconURL: client.user.displayAvatarURL(),
          })
          .setTitle("طرق الدفع :")
          .addFields(
            {
              name: "**<:Paypal:1105764684465983581> بايبال**",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:Payeer:1105153290271981578> بايير**",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:Bitcoin:1105153352985215040> بيتكوين**",

              value: "\u200B",

              inline: false,
            }
          )
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/1174305037493747782.webp"
          )
          .setFooter({
            text: "RD SHOP",
            iconURL: client.user.displayAvatarURL(),
          }),
      ],
    });
  },
};