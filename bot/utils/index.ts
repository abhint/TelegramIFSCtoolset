import bot from "../bot";
import { Composer } from "telegraf";
import { ifsc_message_handlers } from "./message_handler";

export const ifsc_ = async () => {
  bot.use(Composer.privateChat(ifsc_message_handlers));
};
