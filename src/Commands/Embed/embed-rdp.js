const { EmbedBuilder, Client, Message } = require("discord.js");

module.exports = {
  name: "embed-rdp",
  aliases: ["em-rdp"],
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
            name: "RD SHOP | RDP",
            iconURL: client.user.displayAvatarURL(),
          })
          .setTitle("<:Rdp:1105190009352495174> RDP Details :")
          .addFields(
            {
              name: "**<:Cpu:1105153434891599992> Cpu**",

              value: "4 vCpu",

              inline: false,
            },

            {
              name: "**<:Ram:1113454229609271436> Ram**",

              value: "8 GB",

              inline: false,
            },

            {
              name: "**<:Disk:1105153494559772705> Disk**",

              value: "700 GB",

              inline: false,
            },

            {
              name: "**<:Graphics:1105153519209697311> Graphics Card**",

              value: "<:Nothing:1105191477014958183> Nothing",

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
            name: "RD SHOP | RDP",
            iconURL: client.user.displayAvatarURL(),
          })
          .setTitle("💰 Price Details :")
          .addFields(
            {
              name: "**<:Plan:1113707096593158245> RDP Duration**",

              value: "<:Week:1113710967273037877> 1 Week",

              inline: false,
            },

            {
              name: "**<:Paypal:1105764684465983581> PayPal**",

              value: "3$",

              inline: false,
            },

            {
              name: "**<:Payeer:1105153290271981578> Payeer**",

              value: "3$",

              inline: false,
            },

            {
              name: "**<:Bitcoin:1105153352985215040> Bitcoin**",

              value: "0.00011 BTC",

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