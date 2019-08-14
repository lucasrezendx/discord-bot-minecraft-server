const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i)=>{
    let props = require(`./comandos/${f}`);
    console.log(`Comando ${f} carregado com sucesso.`)
    bot.commands.set(props.help.name, props);

  });
});


bot.on("ready", () => {
    console.log(`Bot foi iniciado, com ${bot.users.size} usuários, em ${bot.channels.size} canais, em ${bot.guilds.size} servidores.`); 
    bot.user.setActivity("jogar.obycraft.com", {type: "WATCHING"}, {url: "https://twitch.tv/olucasbr3"});
      // 0 = Jogando
      // 1 = Transmitindo
      // 2 = Ouvindo
      // 3 = Assistindo
});

bot.on("message", message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  
  if(!message.content.startsWith(prefix)) return;
  let arquivocmd = bot.commands.get(command.slice(prefix.length));
  if(arquivocmd) arquivocmd.run(bot,message,args);

});

bot.on('message', message => { 

  if (message.content.includes('discord.gg/')) {
          message.delete() //delete the message

          const embed = new Discord.RichEmbed()
            .setColor([54, 57, 63])
            .setAuthor('Algo deu errado!', message.author.avatarURL)
            .setDescription('Somente administradores do servidor tem permissão para enviar link\'s de outros servidores')
        message.reply(embed).then(msg => msg.delete(10000));

    }
      }
)
 

bot.on('message', message => { 

  if (message.content.includes('discordapp.com/invite/')) { 
          message.delete() 

          const embedd = new Discord.RichEmbed()
            .setColor([54, 57, 63])
            .setAuthor('Algo deu errado!', message.author.avatarURL)
            .setDescription('Somente administradores do servidor tem permissão para enviar link\'s de outros servidores.')
        message.reply(embedd).then(msg => msg.delete(10000));

    }
      }
)


bot.on('message', message => { 

  if (message.content.includes('youtube.com/')) { 
          message.delete() 

          const yt = new Discord.RichEmbed()
            .setColor([54, 57, 63])
            .setAuthor('Algo deu errado!', message.author.avatarURL)
            .setDescription('Você não pode enviar links aqui!.')
        message.reply(yt).then(msg => msg.delete(10000));

    }
      }
)
      
      
      
  
  




bot.on('guildMemberAdd',member => {
const log = new Discord.RichEmbed()
.setAuthor(`${member.user.username}#${member.user.discriminator}`)
.setColor("RANDOM")
.setThumbnail(`${member.user.avatarURL}`)
.setTitle(`👋Bem-vindo(a)!`)
.setDescription(`Olá ${member.user} bem vindo ao servidor oficial do servidor de Minecraft ObyCraft. leia as regras e se divirta!`)
.setFooter(`ID do usuário: ${member.user.id}`)

member.guild.channels.get("593226174835195904").send(`${member.user}`);
member.guild.channels.get("593226174835195904").send(log);

console.log();


});




 bot.login(config.token)