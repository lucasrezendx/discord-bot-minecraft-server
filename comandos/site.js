const DISCORD = require('discord.js'); // API do discord.
exports.run = async (bot, message, args) => { // Evento handler.
 const EMBED = new DISCORD.RichEmbed() // Formar embed.
        .setColor("RANDOM") // Cor hexadecimal.
        .setAuthor(`Acesse já nosso site e tenha vantagens em nosso servidor!`) // Titulo.
        .setDescription(`🛒 | www.obycraft.com`)
        
        
        message.channel.send(EMBED)
}

        exports.help = {
    name: "site"
 
 }