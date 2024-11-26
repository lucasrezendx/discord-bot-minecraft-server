const DISCORD = require('discord.js'); // API do discord.
exports.run = async (bot, message, args) => { // Evento handler.

if(message.channel.id === "698056640439648316"){
const EMBED = new DISCORD.RichEmbed() // Formar embed.
        .setColor("RANDOM") // Cor hexadecimal.
        .setAuthor(`Adicione nosso servidor na sua lista de servidores:`) // Titulo.
        .setDescription(`🎮 | Ip: jogar.obycraft.com`)
        
       
        message.channel.send(EMBED)
}else{
        const nao_perm = new DISCORD.RichEmbed()
        .setColor("2f3136")
        .setAuthor(`Algo deu errado!`, message.guild.iconURL)
        .setDescription("Você só poder executar comandos no chat ``#💻┃comandos``")
  
        message.channel.bulkDelete(1).then(() => {
          message.reply(nao_perm).then(msg => msg.delete(6000));
      });  
}}

        exports.help = {
    name: "ip",     
 }