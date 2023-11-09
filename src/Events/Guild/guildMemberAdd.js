// const client = require("../../index");
// const { MessageAttachment } = require("discord.js");
// const { createCanvas, loadImage } = require("@napi-rs/canvas");
// require("colors");

// module.exports = {
//   name: "guildMemberAdd",
// };

// client.on("guildMemberAdd", async (member) => {
//   if (!process.env.Welcome_Channel_ID) {
//     console.log(
//       "[WARN] Welcome Channel ID for discord bot is required! Put your Welcome Channel ID in the config file."
//         .yellow.bold + "\n"
//     );
//     return process.exit();
//   }

//   try {
//     const canvas = createCanvas(700, 250);
//     const context = canvas.getContext("2d");

//     const background = await loadImage("./src/Assets/Images/wallpaper.jpg");

//     context.drawImage(background, 0, 0, canvas.width, canvas.height);

//     context.font = "48px sans-serif";
//     context.fillStyle = "#ffffff";
//     context.fillText(
//       `Welcome to the server, ${member.user.username}!`,
//       50,
//       100
//     );

//     const avatar = await loadImage(
//       member.user.displayAvatarURL({ format: "jpg", size: 128 })
//     );

//     context.drawImage(avatar, 50, 150, 128, 128);

//     const buffer = canvas.toBuffer();

//     const attachment = new MessageAttachment(buffer, "profile-image.png");

//     const channel = member.guild.channels.cache.get(
//       process.env.Welcome_Channel_ID
//     );

//     if (channel) {
//       channel.send({ files: [attachment] });
//     } else {
//       console.log(
//         "[ERROR] Welcome channel not found. Please check if the Welcome Channel ID is correct in your config."
//           .red.bold
//       );
//     }
//   } catch (error) {
//     console.error("[ERROR] An error occurred:", error);
//   }
// });
