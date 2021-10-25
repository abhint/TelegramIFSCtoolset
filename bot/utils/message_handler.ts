import { Composer } from "telegraf";
var ifsc = require("ifsc");

export const ifsc_message_handlers = Composer.on("text", async (msg) => {
  if (ifsc.validate(msg.update.message.text) !== true) {
    msg.reply("IFSC Not Found");
    return;
  }
  let r = await ifsc.fetchDetails(msg.update.message.text);
  msg.reply(
    `BANK: ${r.BANK}\nIFSC: ${r.IFSC}\BRANCH: ${r.BRANCH}\nADDRESS: ${r.ADDRESS}\nCONTACT: ${r.CONTACT}\nCITY: ${r.CITY}\nDISTRICT: ${r.DISTRICT}\nSTATE: ${r.STATE}`
  );
});
