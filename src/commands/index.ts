import {
  ApplicationCommand,
  InteractionHandler,
} from "@glenstack/cf-workers-discord-bot";
import { command as pingCommand, handler as pingHandler } from "./ping";

export const commands: [ApplicationCommand, InteractionHandler][] = [
  [pingCommand, pingHandler],
];