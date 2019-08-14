const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    let embed = new Discord.RichEmbed()

    .setTitle(`Pong! 🏓`)
    .setColor(`ec6f00`)
    .setDescription(`O ping da API é de ${Math.round(bot.ping)}ms!  `)

    message.channel.send(embed);

}

exports.help = {
    name: "ping"
}    