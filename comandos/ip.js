const DISCORD = require('discord.js'); // API do discord.
exports.run = async (bot, message, args) => { // Evento handler.
 const EMBED = new DISCORD.RichEmbed() // Formar embed.
        .setColor("RANDOM") // Cor hexadecimal.
        .setAuthor(`Adicione nosso servidor na sua lista de servidores:`) // Titulo.
        .setDescription(`🎮 | Ip: jogar.obycraft.com`)
        
        
        message.channel.send(EMBED)
}

        exports.help = {
    name: "ip"
 
 }