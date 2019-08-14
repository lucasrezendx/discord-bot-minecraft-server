const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    
    const embed = new Discord.RichEmbed()
    .setAuthor("Precisando de ajuda? 🤔")
    .setColor([54, 57, 63])
    .setTitle("Comandos utilizados em nosso servidor ⌨")
    .setDescription("▫ !ip \n ▫ !ping \n ▫ !serverinfo \n ▫ !site")
    
    message.reply(embed)

    


}
    



exports.help = {
    name:"ajuda"
}