const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NzA2MDU1NTQwMjM2ODc3ODQ0.Xq0sLA.HEbH7M7hngyL4AS5PtsSCVEodWs'
const PREFIX = '!';
var version = "1.0.0";
const dev = "slomastergames";

//Terminal output
bot.on('ready', () =>{
    console.log('Bot is online');
})
//Bot's login token.
bot.login(token);

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    //Command list:
    switch(args[0]){
       // case 'info':
            //if(args[1] === "version"){
              //  message.channel.send("Bot version: " + version);
           // } else {
              //  message.channel.send("Invalid arguments!")
          //  }
        case "info":
            message.channel.send("Bot version: " + "**"+version+"**" + ", developed by " + "**"+dev+"**.");
            break;
        case 'help':
            message.channel.send("This bot is still under development.");
            break;
        case "clearchat":
        if(!args[1]) return message.reply("Error, please define second argument.")
        message.channel.bulkDelete(args[1]);
        break;
    }

    bot.on('guildMemberAdd', member =>{

        const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
        if(!channel) return;

        channel.send(`Welcome to **No Tolerance**, ${member}! I hope you enjoy your stay.`);

    });

    })


