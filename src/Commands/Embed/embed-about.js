const { EmbedBuilder, Client, Message } = require("discord.js");

module.exports = {
  name: "embed-about",
  aliases: ["em-about"],
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
            name: "RD SHOP | About",
            iconURL: client.user.displayAvatarURL(),
          })
          .setTitle("RD SHOP \nWe Offer Powerful Services At Cheap Prices")
          .addFields(
            {
              name: "**We Offer :**",

              value:
                "1- RDP \n2- Bot Hosting \n3- Game Servers \n\n**We Support IPv4**",

              inline: false,
            },

            {
              name: "**Operating Systems RDP :**",

              value: "<:Windows:1105255003452625017>  Windows",

              inline: false,
            }
          )
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/1174304224880902205.webp"
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
            name: "RD SHOP | About",
            iconURL: client.user.displayAvatarURL(),
          })
          .setTitle("RD متجر \nنحن نقدم خدمات قوية بأسعار رخيصة")
          .addFields(
            {
              name: "**نقدم :**",

              value:
                "1- سطح مكتب بعيد \n2- استضافة البوتات \n3- سيرفرات ألعاب \n\n**ندعم IPv4**",

              inline: false,
            },

            {
              name: "**أنظمة تشغيل سطح المكتب البعيد :**",

              value: "<:Windows:1105255003452625017>  Windows",

              inline: false,
            }
          )
          .setThumbnail(
            "https://cdn.discordapp.com/emojis/1174304224880902205.webp"
          )
          .setFooter({
            text: "RD SHOP",
            iconURL: client.user.displayAvatarURL(),
          }),
      ],
    });
  },
};
