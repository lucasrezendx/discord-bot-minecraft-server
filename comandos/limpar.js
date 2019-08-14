exports.run = async (bot, message, args) => {
    const Discord = require('discord.js');
    let nao_perm = new Discord.RichEmbed()
              .setColor([64, 67, 63])
              .setAuthor(`Algo deu errado!`, message.guild.iconURL)
            .setDescription(`\`\`\`Você deve possuir o cargo 🍀| Moderador ou superior para executar este comando.\`\`\``) 
    
    if(!message.member.roles.some(r=>["🌟| Ajudante","🍀| Moderador", "🎈| Administrador", "💮| Gerente", "👑| Master", , "perm+"].includes(r.name)) )
        return message.reply(nao_perm);
      const d = require('discord.js');
      const deleteCount = parseInt(args[0], 10);
      if(!deleteCount || deleteCount < 2 || deleteCount > 100)
        return message.reply("Por favor, forneça um número entre 2 e 100 para o número de mensagens a serem excluídas");
      
      const fetched = await message.channel.fetchMessages({limit: deleteCount});
      message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`Não foi possível deletar mensagens devido a: ${error}`));
      let embed = new d.RichEmbed()
        .setColor([54, 57, 63])
        .setDescription(`Foram apagadas \`${args[0]} mensagens\` deste canal. \n\`\`\`As mensagens podem ter sido apagadas por diversos motivos, mas os mais frequentes são divulgação ou desavenças.\`\`\``)
        message.reply(embed);
      
    }

    exports.help = {
        name: "limpar"
    }