const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR");

exports.run = (bot,message,args) => {
    if(message.channel.id === "698056640439648316"){      
    let gAvatar = message.guild.iconURL;
    let embed = new Discord.RichEmbed()

    .setTimestamp()
    .setTitle(`${message.guild.name}`, bot.user.displayAvatarURL)
    .setThumbnail(gAvatar)
    .setColor("2f3136")
    .setDescription(`Informações sobre o servidor:`)
    .addField(`▫ :calendar_spiral: Criado em: ${moment(message.guild.createdAt).format("LLL")}`, `▫ :busts_in_silhouette: Membros: ${message.guild.memberCount}` )
    .addField(`▫ 🔊 Canais: ${message.guild.channels.size}`, `▫ 🎮 Ip: jogar.obycraft.com`)
    .setFooter(`obycraft.com`, message.guild.iconURL)

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
    //module.exports.help = {
    //    
    //}    
        
        name: "serverinfo"
    }