const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    
    let nao_perm = new Discord.RichEmbed()
              .setColor("2f3136")
              .setAuthor(`Algo deu errado!`, message.guild.iconURL)
              .setDescription(`Você deve possuir o cargo **Administrador** ou superior para executar este comando.`)
    
    if(!message.member.roles.some(r=>["🎈| Administrador", "💮| Gerente", "👑| Master", , "perm+"].includes(r.name)) )
    return message.reply(nao_perm);
      
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Motivo não informado.";
    let user = args[0];
    
    let info_id = new Discord.RichEmbed()
            .setColor("2f3136")
            .setAuthor(`Algo deu errado!`, message.guild.iconURL)
            .setDescription(`Você deve fornecer o ID do úsuario.\nForma correta: !unban <id> [motivo]`)
    
    if (!user) return message.reply(info_id)
    message.guild.unban(user);
      
    let sucesso = new Discord.RichEmbed()
          .setColor("2f3136")
          .setAuthor(`Usuário desbanido com sucesso!`, message.guild.iconURL)
          .setDescription(`O membro "${user}" teve sua punição revogada!\nMotivo: ${reason}`)
      message.reply(sucesso);
      
    let log = new Discord.RichEmbed()
          .setColor("2f3136")
          .setAuthor(`Um usuário cumpriu sua punição.`, message.guild.iconURL)
          .setDescription(`md\n* CONSOLE: O usuário "${user}" teve sua punição revogada! \n \nMotivo: ${reason}`)
      message.guild.channels.get("610331121720360970").send(log);
      
      let pv = new Discord.RichEmbed()
      .setColor("2f3136")
      .setTitle(`Você foi desbanido do nosso servidor!`)
      .setAuthor(`${message.guild.name}`, message.guild.iconURL)
      .setDescription(`🎉Parabéns, sua punição em nosso servidor foi revogada! Evite infringir as regras novamente.`)
      bot.users.get(`${user}`).send(pv);
  
    
  
};
  
  exports.help = {
      name: "unban"
  }