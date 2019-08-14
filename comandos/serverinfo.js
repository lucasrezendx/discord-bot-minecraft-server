const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR");

exports.run = (bot,message,args) => {
//module.exports.run = bot,message,args => {
//
//}        
    let gAvatar = message.guild.iconURL;
    let embed = new Discord.RichEmbed()

    .setTimestamp()
    .setTitle(`\`${message.guild.name}\``, bot.user.displayAvatarURL)
    .setThumbnail(gAvatar)
    .setColor("ec6f00")
    .setDescription(`Informações sobre o servidor:`)
    .addField(`▫ :calendar_spiral: Criado em:`, moment(message.guild.createdAt).format("LLL"))
    .addField(`▫ :busts_in_silhouette: Membros:`, message.guild.memberCount)
    .addField(`▫ 🔊 Canais:`, message.guild.channels.size)
    .setFooter(`Enviado por: ${message.author.username}`, message.author.avatarURL)
    .setTimestamp(new Date())

    message.channel.send(embed);

}

    exports.help = {
    //module.exports.help = {
    //    
    //}    
        
        name: "serverinfo"
    }