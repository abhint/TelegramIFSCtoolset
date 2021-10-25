import { Composer } from "telegraf";
import bot from "../bot";
import { start_message } from "./command_handler";

export const command = async () => {
  bot.use(Composer.privateChat(start_message));
};
