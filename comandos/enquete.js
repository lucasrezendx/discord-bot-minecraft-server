const DISCORD = require('discord.js'); // API do discord.

exports.run = async (bot, message, args) => { // Evento handler.
  
  let nao_perm = new DISCORD.RichEmbed()
            .setColor([64, 67, 63])
            .setAuthor(`Algo deu errado!`, message.guild.iconURL)
            .setDescription(`\`\`\`Você deve possuir o cargo 💮| Gerente ou superior para executar este comando.\`\`\``) 
  
  if(!message.member.roles.some(r=>["💮| Gerente", "👑| Master"].includes(r.name)) )
      return message.reply(nao_perm);

    const EMBED = new DISCORD.RichEmbed() // Formar embed.
        .setColor([54, 57, 63])
        .setAuthor(`📋| Enquete`)
        .setDescription(args.join(" ")) // Escrever o anuncio depois do !anunciar
      
  message.guild.channels.get("611014236591620114").send("@everyone");
  message.guild.channels.get("611014236591620114").send(EMBED).then(embedMessage => {
    embedMessage.react(message.guild.emojis.get('611012568349278240'));
    embedMessage.react(message.guild.emojis.get('611010298148683797'));
})  
}

  exports.help = {
    name:"enquete" 

  }