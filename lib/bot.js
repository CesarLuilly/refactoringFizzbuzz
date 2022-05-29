require('dotenv').config();

//  //********************************************************************************** */
//  //Ejemplo por LaunchX

// const TelegramBot = require("node-telegram-bot-api");
// const ExplorerController = require("./controllers/ExplorerController");

// // replace the value below with the Telegram token you receive from @BotFather
// const token = process.env.TOKEN_BOT_TELEGRAM;

// // Create a bot that uses 'polling' to fetch new updates
// const bot = new TelegramBot(token, {polling: true});

// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
    //     // 'msg' is the received Message from Telegram
    //     // 'match' is the result of executing the regexp above on the text content
    //     // of the message
    
    //     const chatId = msg.chat.id;
    //     const resp = match[1]; // the captured "whatever"
    
    //     // send back the matched "whatever" to the chat
    //     bot.sendMessage(chatId, resp);
    // });
    
    // // Listen for any kind of message. There are different kinds of
    // // messages.
    // bot.on("message", (msg) => {
        //     const chatId = msg.chat.id;
        //     const numberToApplyFb = parseInt(msg.text);
        
        //     if(!isNaN(numberToApplyFb)){
            //         const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
            //         const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
            //         bot.sendMessage(chatId, responseBot);
            //     } else {
                //         bot.sendMessage(chatId, "Envía un número válido");
                //     }
                
                // });
                
//  //********************************************************************************** */
//  //Ejemplo sacado de internet
const TelegramBot = require('node-telegram-bot-api');


// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN_BOT_TELEGRAM;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
const chatId = msg.chat.id;

// send a message to the chat acknowledging receipt of their message
bot.sendMessage(chatId, 'Received your message');
});

//  //********************************************************************************** */
//  //Ejemplo por compañera de LaunchX
// const TelegramBot = require("node-telegram-bot-api");
// const ExplorerController = require("./controllers/ExplorerController");

// // replace the value below with the Telegram token you receive from @BotFather
// const token = process.env.TOKEN_BOT_TELEGRAM;
// var opt = {polling:true};

// // Create a bot that uses 'polling' to fetch new updates
// const bot = new TelegramBot(token, opt);

// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//     // 'msg' is the received Message from Telegram
//     // 'match' is the result of executing the regexp above on the text content
//     // of the message

//     const chatId = msg.chat.id;
//     const resp = match[1]; // the captured "whatever"

//     // send back the matched "whatever" to the chat
//     bot.sendMessage(chatId, resp);
// });

// bot.on("polling_error", console.log);

// // Listen for any kind of message. There are different kinds of
// // messages.
// bot.on("message", (msg) => {
//     const chatId = msg.chat.id;
//     const numberToApplyFb = parseInt(msg.text);
//     const mission = msg.text;
//     if(!isNaN(numberToApplyFb)){
//         const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
//         const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
//         bot.sendMessage(chatId, responseBot);
//     } else if((mission==="java" || mission=="node") && mission!==""){
//         console.log("mission", mission)
//         const responseBot = ExplorerController.getExplorersUsernamesByMission(mission);
//         let explorersNames = new Array(responseBot).toLocaleString();
//         explorersNames = String(explorersNames).replaceAll(',', ', ')
//         const response =  `Estos son todos los explorers que se encuentra en la misión ${mission}: ${explorersNames}`;
//         bot.sendMessage(chatId, response );

//     }else {
//         bot.sendMessage(chatId, "Envía un número válido");
//     }

// });