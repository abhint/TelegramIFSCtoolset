import { Composer } from "telegraf";

export const start_message = Composer.command("start", async (message)=>{
    message.reply("IFSC")
})