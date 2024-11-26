const DISCORD = require('discord.js'); // API do discord.

exports.run = async (client, message, args) => { // Evento handler.
  
  let nao_perm = new DISCORD.RichEmbed()
            .setColor("2f3136")
            .setAuthor(`Algo deu errado!`, message.guild.iconURL)
            .setDescription(`Você deve possuir o cargo **Gerente** ou superior para executar este comando.`) 
  
  if(!message.member.roles.some(r=>["💮| Gerente", "👑| Master"].includes(r.name)) )
      return message.reply(nao_perm);
    const EMBED = new DISCORD.RichEmbed() // Formar embed.
        .setColor("2f3136") // Cor hexadecimal.
        .setDescription(args.join(" ")) // Escrever o anuncio depois do !anunciar
        .setTitle(`:loudspeaker: | Anúncio`) // Titulo.
        .setFooter(`Enviado por: ${message.author.username}`, message.author.avatarURL)
        .setTimestamp(new Date ())
  
  message.guild.channels.get("698056321307639838").send("@everyone");
  message.guild.channels.get("698056321307639838").send(EMBED); // Enviar a embed com o everyone.
}

  exports.help = {
    name:"anunciar"

  }