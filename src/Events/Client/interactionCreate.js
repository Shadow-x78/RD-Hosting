const { PermissionsBitField } = require("discord.js");
const client = require("../../index");

module.exports = {
  name: "interactionCreate",
};

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (!interaction.type == 2) return;

  const command = client.slash.get(interaction.commandName);

  if (!command) return;

  try {
    if (command.OwnerOnly) {
      if (!process.env.Owner_ID.includes(interaction.member.id)) {
        interaction.reply({
          content: `**${interaction.member}** You can't access owner commands`,
          ephemeral: true,
        });
      }
    }

    if (command.UserPermissions) {
      if (
        !interaction.member.permissions.has(
          PermissionsBitField.resolve(command.UserPermissions || [])
        )
      )
        return interaction.reply({
          content: `${
            interaction.member
          } You don't have the required permissions to use this command -> \`${
            command.UserPermissions || []
          }\``,
          ephemeral: true,
        });
    }

    if (command.BotPermissions) {
      if (
        !interaction.guild.members.cache
          .get(client.user.id)
          .permissions.has(
            PermissionsBitField.resolve(command.BotPermissions || [])
          )
      )
        return interaction.reply({
          content: `${
            interaction.member
          } I don't have the required permissions to use this command -> \`${
            command.BotPermissions || []
          }\``,
          ephemeral: true,
        });
    }

    await command.run(client, interaction, interaction.options);
  } catch (err) {
    console.log(err);
  }
});