const DISCORD = require('discord.js'); // API do discord.
exports.run = async (bot, message, args) => { // Evento handler.
        if(message.channel.id === "698056640439648316"){
        const EMBED = new DISCORD.RichEmbed() // Formar embed.
           .setColor("2f3136") // Cor hexadecimal.
           .setAuthor(`Criador`) // Titulo.
           .addField(`Este bot foi criado por: ${`@LucasBR3#0550`}`, "Twitter: @Lucas_dRezende")
           .setURL("https://twitter.com/Lucas_dRezende")
           .setFooter(`obycraft.com`, message.guild.iconURL)
           .setTimestamp(new Date ())
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
    name: "criador"
 
 }