const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    if(message.channel.id === "698056640439648316"){
    let embed = new Discord.RichEmbed()

    .setAuthor(`Pong! 🏓`)
    .setColor(`RANDOM`)
    .setDescription(`O ping da API é de ${Math.round(bot.ping)}ms!  `)

    message.channel.send(embed)
     } else {
    const nao_perm = new Discord.RichEmbed()
        .setColor("2f3136")
        .setAuthor(`Algo deu errado!`, message.guild.iconURL)
        .setDescription("Você só poder executar comandos no chat ``#💻┃comandos``")
  
        message.channel.bulkDelete(1).then(() => {
          message.reply(nao_perm).then(msg => msg.delete(6000));
      });  

}}

exports.help = {
    name: "ping"
}    