import { Telegraf } from "telegraf";
import * as dotenv from "dotenv"
dotenv.config()

// @ts-ignore
const bot = new Telegraf(process.env.BOT_TOKEN);

export default bot;
