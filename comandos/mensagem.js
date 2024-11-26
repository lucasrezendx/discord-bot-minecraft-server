const DISCORD = require('discord.js');

exports.run = async (client, message, args) => {

    let nao_perm = new DISCORD.RichEmbed()
            .setColor("2f3136")
            .setAuthor(`Algo deu errado!`, message.guild.iconURL)
            .setDescription(`Você deve possuir o cargo **Gerente** ou superior para executar este comando.`) 
  
  if(!message.member.roles.some(r=>["💮| Gerente", "👑| Master"].includes(r.name)) )
      return message.reply(nao_perm);
    
    
    const mensagem = new DISCORD.RichEmbed()
    .setColor("2f3136")
    .setAuthor("Sistema de atendimento via ticket")
    .addField("Aqui você poderá ser atendido sobre:", `${client.emojis.get("714972819028443158")} Reportar um erro do servidor \n ${client.emojis.get("714972819028443158")} Problemas com compras em nossa loja \n ${client.emojis.get("714972819028443158")} Dúvidas relacionadas ao servidor \n ${client.emojis.get("714972819028443158")} Outros assuntos \n⠀⠀⠀⠀⠀⠀⠀⠀\n Para ser atendido clique na reação 🏷️`)
    .setImage("https://i.imgur.com/u38iIHv.png")
    
    message.channel.send(mensagem).then(embedMessage => {
    embedMessage.react("🏷️");
    })
}
exports.help = {
    name: "mensagem"
 
 }