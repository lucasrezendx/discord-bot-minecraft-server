const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!silenciar @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("não foi possível encontrar um usuário.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("você não possui permissão!");
  let muterole = message.guild.roles.find(muterole => muterole.name === "SILENCIADO");

  //começo
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "SILENCIADO",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          VIEW_CHANNEL: true
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //fim
  let mutetime = args[1];
  if(!mutetime) return message.reply("defina um tempo para essa punição: !silenciar <@usuario> <tempo> [razão]");

  let reason = args.slice(2).join(' ');
  let sucesso = new Discord.RichEmbed()
        .setColor([54, 57, 63])
        .setAuthor(`Usuário silenciado com sucesso!`, message.guild.iconURL)
        .setDescription(`\`\`\`O usuário "${tomute.user.username}#${tomute.user.discriminator}" foi silenciado por "${message.author.username}".  \n \nTempo: ${ms(ms(mutetime))}.          \nMotivo: ${reason}.\`\`\``)
        .setThumbnail(`${message.guild.iconURL}`)
        .setFooter(`ID do usuário: ${tomute.id}`)
    message.reply(sucesso);

  let log = new Discord.RichEmbed()
    .setColor([54, 57, 63])
    .setAuthor(`Um usuário foi silenciado.`, message.guild.iconURL)
    .setDescription(`\`\`\`O usuário "@${tomute.user.username}#${tomute.user.discriminator}" foi silenciado por "${message.author.username}".\n   \nTempo: ${ms(ms(mutetime))}.        \nMotivo: ${reason}.\`\`\``)
    .setThumbnail(`${message.guild.iconURL}`)
    .setFooter(`ID do usuário: ${tomute.id}`)
    message.guild.channels.get("610331121720360970").send(`${tomute.user}`);
    message.guild.channels.get("610331121720360970").send(log);
    await(tomute.addRole(muterole.id));

    let pv = new Discord.RichEmbed()
        .setColor([54, 57, 63])
        .setTitle(`Você foi silenciado do nosso servidor!`)
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .setDescription(`\`\`\`🔇 Infelizmente você foi silenciado do nosso servidor. \nTempo:${ms(ms(mutetime))}.  \nMotivo: ${reason}!\`\`\``)
    bot.users.get(`${tomute.id}`).send(pv);

      setTimeout(function(){
    tomute.removeRole(muterole.id);    
      bot.channels.get("610331121720360970").send(`<@${tomute.id}> cumpriu sua punição e foi desmutado.`);
    

    let pvu = new Discord.RichEmbed()
        .setColor([54, 57, 63])
        .setTitle(`Agora você pode falar!`)
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .setDescription(`\`\`\`🎉Sua punição acabou e você foi desmutado em nosso servidor!\`\`\``)
    bot.users.get(`${tomute.id}`).send(pvu);
  }, ms(mutetime));
    


}

//fim do modulo


module.exports.help = {
  name: "silenciar"
}