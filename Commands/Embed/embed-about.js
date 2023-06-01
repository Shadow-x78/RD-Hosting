const { EmbedBuilder, Client, Message } = require("discord.js");

module.exports = {
  name: "embed-about",
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
            name: "RD SHOP | About",
            iconURL: client.user.displayAvatarURL(),
          })
          .setTitle("〘 RD SHOP 〙We Offer Powerful Services At Cheap Prices")
          .addFields(
            {
              name: "**We Offer :**",

              value:
                "1- [ Cheap RDP ] \n2- [ Bot Hosting ] \n3- [ Game Servers ] \n\nWe Support IPv4 And IPv6",

              inline: false,
            },

            {
              name: "**Operating Systems RDP :**",

              value: "1- [ Windows ] \n2- [ Linux ] \n3- [ Mac ]",

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
    message.channel.send({
      embeds: [
        new EmbedBuilder()
          .setColor("LuminousVividPink")
          .setAuthor({
            name: "RD SHOP | About",
            iconURL: client.user.displayAvatarURL(),
          })
          .setTitle("〘 RD SHOP 〙نحن نقدم خدمات قوية بأسعار رخيصة")
          .addFields(
            {
              name: "**نقدم :**",

              value:
                "1- [ سطح مكتب بعيد رخيص ] \n2- [ استضافة البوتات ] \n3- [ سيرفرات ألعاب ] \n\nندعم IPv4 و IPv6",

              inline: false,
            },

            {
              name: "**أنظمة تشغيل سطح المكتب البعيد :**",

              value: "1- [ Windows ] \n2- [ Linux ] \n3- [ Mac ]",

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