var TelegramBot = require('node-telegram-bot-api');
var token = process.env.TOKEN;
var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    console.log(msg);
    bot.sendMessage(chatId, "хай йовин", {caption: "I'm a bot!"});
});
