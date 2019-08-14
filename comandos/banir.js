const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Você não possui permissão!");
    if(args.lenght === 0) return message.reply("utilize !banir <@usuário> <motivo>");
    let banMember = message.mentions.users.first();
    if(!banMember) return message.reply("Usuário não encontrado.");
    let banReason = args.join(" ").slice(22) || args.slice(1).join(" ");
    if(!banReason){
        banReason = "Motivo não informado."
    }
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply(falta_membro);
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Nenhuma razão fornecida.";
    await member.ban(reason)
      .catch(error => message.reply(`Não consegui expulsar o usuário devido ao: ${error}`).then(msg=>msg.delete(5000)));
    let sucesso = new Discord.RichEmbed()
        .setColor([54, 57, 63])
        .setAuthor(`Usuário banido com sucesso!`, message.guild.iconURL)
        .setDescription(`\`\`\`O usuário "@${member.user.username}#${member.user.discriminator}" foi banido por "${message.author.username}". \n \nMotivo: ${reason}\`\`\``)
        .setThumbnail(message.guild.iconURL)
        .setFooter(`ID do usuário: ${member.id}`)
    message.reply(sucesso);
    let log = new Discord.RichEmbed()
        .setColor([54, 57, 63])
        .setAuthor(`Um usuário foi banido do servidor.`, message.guild.iconURL)
        .setDescription(`\`\`\`O usuário "@${member.user.username}#${member.user.discriminator}" foi banido por "${message.author.username}". \n \nMotivo: ${reason}\`\`\``)
        .setThumbnail(message.guild.iconURL)
        .setFooter(`ID do usuário: ${member.id}`)
    message.guild.channels.get("610331121720360970").send(`${member.user}`);    
    message.guild.channels.get("610331121720360970").send(log);

    let pv = new Discord.RichEmbed()
        .setColor([54, 57, 63])
        .setTitle(`Você foi banido do nosso servidor!`)
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .setDescription(`\`\`\`🚫Infelizmente você foi banido do nosso servidor. \nMotivo: ${reason}!\`\`\``)
    bot.users.get(`${banMember.id}`).send(pv);


  }


exports.help = {
    name: "banir"

}
