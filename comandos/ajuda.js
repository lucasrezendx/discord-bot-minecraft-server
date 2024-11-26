const DISCORD = require('discord.js'); // API do discord.
    exports.run = async (bot, message, args) => { // Evento handler.
        
      if(message.channel.id === "698056640439648316"){
      const EMBED = new DISCORD.RichEmbed() // Formar embed.
        .setColor("2f3136") // Cor hexadecimal.
        .setAuthor(`Comandos`) // Titulo.
        .setDescription("Todos os comandos são executados com o prefixo `!`")
        .addField(message.guild.emojis.get('714972819028443158') + ` Comandos gerais:`, "▫ !ajuda - ``Informa os comandos do bot`` \n ▫ !ip - ``Informa o ip do servidor.`` \n ▫ !ping - ``Informa o ping da API.`` \n ▫ !serverinfo - ``Informações oficiais do Discord.`` \n ▫ !site - ``Informa o site do servidor.`` \n  ▫ !criador - ``Informa o criador do ObyBot.`` \n ▫ !sugerir - ``Sugere algo para ser implementado no servidor.`` \n ▫ !youtuber - ``Solicita uma TAG Youtuber no servidor.`` \n ▫ !status - ``Informa o status do servidor atualmente.``")
        .setFooter(`obycraft.com`, message.guild.iconURL)

     message.channel.send(EMBED)
      
    }else{
      const nao_perm = new DISCORD.RichEmbed()
      .setColor("2f3136")
      .setAuthor(`Algo deu errado!`, message.guild.iconURL)
      .setDescription("Você só poder executar comandos no chat ``# 💻┃comandos``")

      message.channel.bulkDelete(1).then(() => {
        message.reply(nao_perm).then(msg => msg.delete(6000));
    });
      
  }}
exports.help = {
    name:"ajuda"

  }