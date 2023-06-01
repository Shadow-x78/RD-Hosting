const { EmbedBuilder, Client, Message } = require("discord.js");

module.exports = {
  name: "embed-rdp",
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
            name: "RD SHOP | RDP",
            iconURL: client.user.displayAvatarURL(),
          })
          .setTitle("<:Rdp:1105190009352495174> RDP Details :")
          .addFields(
            {
              name: "**<:Plan:1113707096593158245> Plan 1**",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:Cpu:1105153434891599992> Cpu**",

              value: "2 vCpu",

              inline: false,
            },

            {
              name: "**<:Ram:1113454229609271436> Ram**",

              value: "4 GB",

              inline: false,
            },

            {
              name: "**<:Disk:1105153494559772705> Disk**",

              value: "512 GB",

              inline: false,
            },

            {
              name: "**<:Graphics:1105153519209697311> Graphics Card**",

              value: "<:Nothing:1105191477014958183> Nothing",

              inline: false,
            },

            {
              name: "\u200B",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:Plan:1113707096593158245> Plan 2**",

              value: "\u200B",

              inline: false,
            },

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

              value: "512 GB",

              inline: false,
            },

            {
              name: "**<:Graphics:1105153519209697311> Graphics Card**",

              value: "<:Nothing:1105191477014958183> Nothing",

              inline: false,
            },

            {
              name: "\u200B",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:Plan:1113707096593158245> Plan 3**",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:Cpu:1105153434891599992> Cpu**",

              value: "8 vCpu",

              inline: false,
            },

            {
              name: "**<:Ram:1113454229609271436> Ram**",

              value: "16 GB",

              inline: false,
            },

            {
              name: "**<:Disk:1105153494559772705> Disk**",

              value: "512 GB",

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
          .setTitle("<:Rdp:1105190009352495174> Plans Details :")
          .addFields(
            {
              name: "**<:Plan:1113707096593158245> Plan 1**",

              value:
                "**<:Week:1113710967273037877> 1 Week** || **<:Month:1113710945013878826> 1 Month**",

              inline: false,
            },

            {
              name: "\u200B",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:ProbotCredit:1113538694322847904> ProBot Credit**",

              value: "200k || 800k",

              inline: false,
            },

            {
              name: "**<:Paypal:1105764684465983581> PayPal**",

              value: "0.75$ || 3$",

              inline: false,
            },

            {
              name: "**<:Payeer:1105153290271981578> Payeer**",

              value: "0.75$ || 3$",

              inline: false,
            },

            {
              name: "**<:Bitcoin:1105153352985215040> Bitcoin**",

              value: "0.000028 BTC || 0.00011 BTC",

              inline: false,
            },

            {
              name: "\u200B",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:Plan:1113707096593158245> Plan 2**",

              value:
                "**<:Week:1113710967273037877> 1 Week** || **<:Month:1113710945013878826> 1 Month**",

              inline: false,
            },

            {
              name: "\u200B",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:ProbotCredit:1113538694322847904> ProBot Credit**",

              value: "300k || 1.2m",

              inline: false,
            },

            {
              name: "**<:Paypal:1105764684465983581> PayPal**",

              value: "1.5$ || 6$",

              inline: false,
            },

            {
              name: "**<:Payeer:1105153290271981578> Payeer**",

              value: "1.5$ || 6$",

              inline: false,
            },

            {
              name: "**<:Bitcoin:1105153352985215040> Bitcoin**",

              value: "0.000056 BTC || 0.00022 BTC",

              inline: false,
            },

            {
              name: "\u200B",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:Plan:1113707096593158245> Plan 3**",

              value:
                "**<:Week:1113710967273037877> 1 Week** || **<:Month:1113710945013878826> 1 Month**",

              inline: false,
            },

            {
              name: "\u200B",

              value: "\u200B",

              inline: false,
            },

            {
              name: "**<:ProbotCredit:1113538694322847904> ProBot Credit**",

              value: "500k || 2.0m",

              inline: false,
            },

            {
              name: "**<:Paypal:1105764684465983581> PayPal**",

              value: "2.5$ || 10$",

              inline: false,
            },

            {
              name: "**<:Payeer:1105153290271981578> Payeer**",

              value: "2.5$ || 10$",

              inline: false,
            },

            {
              name: "**<:Bitcoin:1105153352985215040> Bitcoin**",

              value: "0.000093 BTC || 0.00037 BTC",

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