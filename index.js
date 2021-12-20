const Discord = require('discord.js');
const Client = new Discord.Client();

Client.once('ready', ()=>{
    console.log('Bot is ready!');
});

client.login(process.env.BOT_TOKEN);
