import bot from "./bot/bot";
import { command } from "./bot/commands";
import { ifsc_ } from "./bot/utils";

(async () => {
  await command();
  await ifsc_();
  await bot.launch();
})();
