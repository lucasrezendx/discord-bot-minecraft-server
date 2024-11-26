const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    const categoryId = "717153638564495410";

    let nao_perm = new discord.RichEmbed()
    .setColor("2f3136")
    .setAuthor(`Algo deu errado!`, message.guild.iconURL)
    .setDescription(`Você deve possuir o cargo **Ajudante** ou superior para executar este comando.`) 

if(!message.member.roles.some(r=>["[Ajudante]","🍀| Moderador", "🎈| Administrador", "💮| Gerente", "👑| Master", , "perm+"].includes(r.name)))
    return message.channel.bulkDelete(1).then(() => {
        message.reply(nao_perm).then(msg => msg.delete(10000));
      });
    if (message.channel.parentID == categoryId) {
        message.channel.delete();
 
    } else {
    let perm = new discord.RichEmbed()
    .setColor("2f3136")
    .setAuthor(`Algo deu errado!`, message.guild.iconURL)
    .setDescription(`Você não pode encerrar canais que não são **Tickets**.`)

    message.channel.bulkDelete(1).then(() => {
        message.reply(perm).then(msg => msg.delete(10000));
      }); 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setColor("2f3136")
        .setAuthor("Novo atendimento:")
        .setDescription("<:seta2:714972819305398364> O jogador: " + message.channel.name + " foi atendido.")
        .setFooter(`Atendido por: ${message.author.username}`, message.author.avatarURL);
 
     // Vind kanaal voor de logs.
     var logChannel = message.guild.channels.find(channel => channel.name === "atendidos");
     if (!logChannel) return message.channel.send("Este canal não existe.");
    
     if (message.channel.parentID == categoryId){
     logChannel.send(embedCloseTicket);    
     }
 
}
 
exports.help = {
    name: "ticketencerrar"
}