import TelegramBot from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';


dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN || '';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
	const chatId = msg.chat.id;
	const text = msg.text || '';
	if (text === '/start') {
		bot.sendMessage(chatId, `chatID: ${chatId}`).then(message => console.log(message.text))
	}
});

bot.on('polling_error', (error) => {
	console.error('error connect to tg:', error.name, error.message);
});

console.log('tg-chat-id-bot started');