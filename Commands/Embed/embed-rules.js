const { EmbedBuilder, Client, Message } = require("discord.js");

module.exports = {
  name: "embed-rules",
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
            name: "RD SHOP | Rules",
            iconURL: client.user.displayAvatarURL(),
          })
          .setTitle("Rules For〘 RD SHOP 〙")
          .addFields(
            {
              name: "**Rule 1 - Discord Terms of Service and Community Guidelines**",

              value:
                "> Discord Terms and Services are applied to this server at all times, so please familiarize yourself with them at: https://discord.com/terms & https://discord.com/guidelines",

              inline: false,
            },

            {
              name: "**Rule 2 - User Behavior**",

              value:
                "> Maintain respect for all users and the singularities of the server. Any type of discriminatory infraction, violation of human rights, injury, defamation, among other factors, is strictly prohibited. If you have nothing good to say, don't say anything at all. We are a community with open arms and we welcome everyone.",

              inline: false,
            },

            {
              name: "**Rule 3 - Nicknames and Avatars**",

              value:
                "> Nicknames and avatars of an offensive, racist nature, insults or those based on race, nationality or religion, or those that incite hatred, elements of violence, terrorism, extremism, etc. are stricly prohibited and may be requested to change by a Moderator.",

              inline: false,
            },

            {
              name: "**Rule 4 - NSFW Content**",

              value:
                "> NSFW or NSFL content is not allowed on this server, period. Failure to comply with this rule will likely result in your immediate removal from this server.",

              inline: false,
            },

            {
              name: "**Rule 5 - Spam**",

              value:
                "> Spam of any kind is not allowed in any channel. We would like to keep all channels clean and organized.",

              inline: false,
            },

            {
              name: "**Rule 6 - Server Administration**",

              value:
                "> The server is composed of Administrators, Moderators and Helpers. Each one has their own jurisdiction in the server, therefore, please respect them. When there is a need for new members for the Administration, we will announce it ahead of time, so please do not ask for positions.",

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
            name: "RD SHOP | Rules",
            iconURL: client.user.displayAvatarURL(),
          })
          .setTitle("القوانين الخاصة بخادم〘 RD SHOP 〙")
          .addFields(
            {
              name: "**القاعدة 1 - شروط خدمة Discord وإرشادات المجتمع**",

              value:
                "> يتم تطبيق شروط وخدمات Discord على هذا الخادم في  جميع الأوقات، لذا يرجى التعرف عليها على: https://discord.com/terms & https://discord.com/guidelines",

              inline: false,
            },

            {
              name: "**القاعدة 2 - سلوك المستخدم**",

              value:
                "> الحفاظ على الاحترام لجميع المستخدمين. الخادم يحظر تمامًا أي نوع من أنواع الانتهاك التمييزي وانتهاك حقوق الإنسان والضرر والتشهير. إذا لم يكن لديك شيء جيد لتقوله، فلا تقل أي شيء على الإطلاق. نحن مجتمع بأذرع مفتوحة ونرحب بالجميع.",

              inline: false,
            },

            {
              name: "**القاعدة 3 - الألقاب والصور الرمزية**",

              value:
                "> يُحظر بشدة استخدام الألقاب والصور الرمزية ذات الطبيعة الهجومية أو العنصرية أو الإهانات أو تلك القائمة على العرق أو الجنسية أو الدين أو تلك التي تحرض على الكراهية أو عناصر العنف أو الإرهاب أو التطرف، وما إلى ذلك، وقد يُطلب تغييرها من قبل المسؤولين.",

              inline: false,
            },

            {
              name: "**القاعدة 4 - محتوى NSFW**",

              value:
                "> محتوى NSFW أو NSFL غير مسموح به على هذا الخادم. ومن المحتمل أن يؤدي عدم الالتزام بهذه القاعدة إلى الإزالة الفورية من هذا الخادم.",

              inline: false,
            },

            {
              name: "**القاعدة 5 - البريد العشوائي**",

              value:
                "> البريد العشوائي من أي نوع غير مسموح به في أي قناة. نود أن نحافظ على نظافة جميع القنوات وتنظيمها.",

              inline: false,
            },

            {
              name: "**القاعدة 6 - إدارة الخادم**",

              value:
                "> يتكون الخادم من المسؤولين والمشرفين والمساعدين. كل واحد له اختصاصه الخاص في الخادم، لذلك يرجى احترامهم. عندما تكون هناك حاجة لأعضاء جدد في الإدارة، سنعلن ذلك في وقت مبكر، لذا من فضلك لا تطلب مناصب",

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