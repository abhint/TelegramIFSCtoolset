import { Composer } from "telegraf";

export const start_message = Composer.command("start", async (message) => {
  message.reply(
    "Send the IFSC code of any bank and this bot will send the details of that bank"
  );
});
