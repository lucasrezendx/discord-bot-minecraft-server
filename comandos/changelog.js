const DISCORD = require('discord.js'); // API do discord.
exports.run = async (bot, message, args) => { // Evento handler.
  let nao_perm = new DISCORD.RichEmbed()
            .setColor([64, 67, 63])
            .setAuthor(`Algo deu errado!`, message.guild.iconURL)
            .setDescription(`\`\`\`Você deve possuir o cargo 🍀| Moderador ou superior para executar este comando.\`\`\``) 
  if(!message.member.roles.some(r=>["💮| Gerente", "👑| Master"].includes(r.name)) )
      return message.reply(nao_perm);
    const EMBED = new DISCORD.RichEmbed() // Formar embed.
        .setColor("ec6f00") // Cor hexadecimal.
        .setDescription(args.join(" ")) // Escrever o anuncio depois do !changelog
        .setTitle(`:date: | Changelog`) // Titulo.
        .setFooter(`Enviado por: ${message.author.username}`, message.author.avatarURL)
        .setTimestamp(new Date ())
   
   message.guild.channels.get("593210394214924290").send(EMBED); // Enviar a embed.
}

    exports.help = {
        name: "changelog"

    }