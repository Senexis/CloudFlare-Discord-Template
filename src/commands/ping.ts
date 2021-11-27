import {
  ApplicationCommand,
  Interaction,
  InteractionHandler,
  InteractionResponse,
  InteractionResponseType,
} from "@glenstack/cf-workers-discord-bot";

export const command: ApplicationCommand = {
  name: "ping",
  description: "Ensures the bot is working by responding with a simple pong message.",
};

export const handler: InteractionHandler = async (
  interaction: Interaction
): Promise<InteractionResponse> => {
  const userID = interaction.member.user.id;

  return {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      content: `Hello there, <@${userID}>! Pong!`,
      allowed_mentions: {
        users: [userID],
      },
    },
  };
};