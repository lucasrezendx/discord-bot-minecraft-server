const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

// LIGANDO O BOT

fs.readdir("./comandos/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    console.log(`Comando ${f} carregado com sucesso.`)
    bot.commands.set(props.help.name, props);

  });
});

//  COMANDO !status

const client = new Discord.Client();
client.login('NjA5ODM0Mzg4MjI1NTIzNzI2.XU8eqQ.UbV0RRzURDRJZG3zwf2HwuFdGqw');
const request = require('request');
const configg = {
  commands: {
    status: {
      command: "!status",
      messages: {
        error: "Erro ao adquirir o status...",
        offline: "O servidor encontra-se offline",
        online: "Servidor está Online  -  ",
        players: "{online} pessoas jogando agora!",
        noPlayers: "Ninguém está jogando"
      }

    },
  },
  server: {
    ip: "jogar.obycraft.com", //ip DO servidor
    port: 25565 //porta
  }
};


client.on('message', message => { 
  if (message.content === configg.commands.status.command) {

    let url = 'http://mcapi.us/server/status?ip=' + configg.server.ip + '&port=' + configg.server.port;
    request(url, function (err, response, body) {
      if (err) {
        console.error(err);
        return message.reply(configg.commands.status.messages.error);
      }

      body = JSON.parse(body);
      const serveron = new Discord.RichEmbed()
        .setColor("00FF7F")
        .setDescription(`${client.emojis.get("714972819028443158")} **Status: Online**`)
        .addField(`O servidor está atualmente com ${body.players.now} jogadores simultâneos.`, 'Acesse nosso servidor pelo endereço: jogar.obycraft.com')
        .setFooter(`obycraft.com`, message.guild.iconURL)
        .setTimestamp(new Date())

      let offline = new Discord.RichEmbed()
        .setColor("F60E03")
        .setDescription(`${client.emojis.get("714972819028443158")} **Status: Offline**`)
        .addField(`O servidor está atualmente Offline.`, 'Você poderá acessar nosso servidor pelo endereço: jogar.obycraft.com')
        .setFooter(`obycraft.com`, message.guild.iconURL)
        .setTimestamp(new Date())

      var status = offline;
      if (body.online) {
        status = serveron;
      }
      message.channel.send(status);
    });
  } 
}    
);

// DEFININDO STATUS DO BOT

const activities_list = [
  "www.obycraft.com",
  "utilize !ajuda no chat",
  "www.obycraft.com",
  "jogar.obycraft.com"
];

bot.on('ready', () => {
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
    bot.user.setActivity(activities_list[index], { type: "PLAYING" }); // SETANDO ACTIVITY DO BOT: PLAYING, WATCHING, STREAMING...
  }, 10000); // O STATUS DO BOT MUDA A CADA 10 SEGUNDOS
});

bot.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;
  let arquivocmd = bot.commands.get(command.slice(prefix.length));
  if (arquivocmd) arquivocmd.run(bot, message, args);

});

// SISTEMAS ANT-DIVULGAÇÃO

bot.on('message', async message => {

  if (message.content.includes('discordapp.com/invite/')) {
    if(!message.member.roles.some(r=>["🎈| Administrador", "💮| Gerente", "👑| Master", , "perm+"].includes(r.name)) ){
    message.delete()



    const embedd = new Discord.RichEmbed()
      .setColor([54, 57, 63])
      .setAuthor('Algo deu errado!', message.author.avatarURL)
      .setDescription('Somente administradores do servidor tem permissão para enviar link\'s de outros servidores.')
    message.reply(embedd).then(msg => msg.delete(3000));

  }
}})

bot.on('message', async message => {

  if (message.content.includes('discord.gg/')) {
    if(!message.member.roles.some(r=>["🎈| Administrador", "💮| Gerente", "👑| Master", , "perm+"].includes(r.name)) ){
    message.delete()



    const embedd = new Discord.RichEmbed()
      .setColor([54, 57, 63])
      .setAuthor('Algo deu errado!', message.author.avatarURL)
      .setDescription('Somente administradores do servidor tem permissão para enviar link\'s de outros servidores.')
    message.reply(embedd).then(msg => msg.delete(3000));

  }
}})

bot.on('message', async message => {
  if(message.channel.id === "698055387508768778"){ 
    if(message.content.includes('https://')){
      if(!message.member.roles.some(r=>["🎈| Administrador", "💮| Gerente", "👑| Master", , "perm+"].includes(r.name)) ) {
        message.delete()
    
        const yt = new Discord.RichEmbed()
          .setColor([54, 57, 63])
          .setAuthor('Algo deu errado!', message.author.avatarURL)
          .setDescription('Você não pode enviar links aqui!.')
        message.reply(yt).then(msg => msg.delete(3000));
    
      }}}}) 
      
bot.on('message', async message => {
  if(message.channel.id === "698056640439648316"){ 
    if(message.content.includes('https://')){
      if(!message.member.roles.some(r=>["🎈| Administrador", "💮| Gerente", "👑| Master", , "perm+"].includes(r.name)) ) {
        message.delete()
    
        const yt = new Discord.RichEmbed()
          .setColor([54, 57, 63])
          .setAuthor('Algo deu errado!', message.author.avatarURL)
          .setDescription('Você não pode enviar links aqui!.')
        message.reply(yt).then(msg => msg.delete(3000));
    
      }}}})   

// TICKETS VIA REAÇÃO

var userTickets = new Map();

client.login(config.token);

client.on('ready', () => {
    console.log(client.user.username + " ligado.");
});

client.on('message', message => {
  
        
        if(message.embeds.length === 1 && message.embeds[0].title === 'Ticket criado ✅') {
            message.react('✅')
            .then(reaction => console.log("Reacted with " + reaction.emoji.name))
            .catch(err => console.log(err));
        }
    });
    
client.on('raw', payload => {
    if(payload.t === 'MESSAGE_REACTION_ADD') { 
        if(payload.d.emoji.name === '🏷️')
        {
            if(payload.d.message_id === '718590988507021395'){ 
                let channel = client.channels.get(payload.d.channel_id)
                if(channel.messages.has(payload.d.message_id)){  
                    return;
                }
                else {
                    channel.fetchMessage(payload.d.message_id)
                    .then(msg => {
                        let reaction = msg.reactions.get('🏷️');
                        let user = client.users.get(payload.d.user_id);
                        let remover = msg.reactions.forEach(reaction => reaction.remove(user))
                        client.emit(reaction, user, remover)
                        
                    })
                    .catch(err => console.log(err));
                }
            }
        }
        else if(payload.d.emoji.name === '🏷️') {
            let channel = client.channels.get(payload.d.channel_id);
            if(channel.messages.has(payload.d.message_id)) {
                return;
            }
        }
    }
});

client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === '🏷️') { 

      if(reaction.message.guild.channels.some(channel => channel.name == user.username.toLowerCase() + "-" + user.discriminator)){
            
          let pv = new Discord.RichEmbed()
          .setColor('2f3136')
          .setAuthor(`Ops... 🏷️`)
          .setDescription(`Parece que você tentou abrir um novo ticket, mas você já tem um em aberto na categoria _Central de atendimento_ do nosso servidor.`)
          .setFooter(`obycraft.com`, reaction.message.guild.iconURL)
          user.send(pv);// Manda a embed à cima ^ no pv do usuário.
        
        }
        else {
          const categoryId = "717153638564495410";
            let guild = reaction.message.guild;
            guild.createChannel(`${user.username} - ${user.discriminator}`, {
                type: 'text',
                permissionOverwrites: [
                    {
                        allow: 'VIEW_CHANNEL',
                        id: user.id
                    },
                    {
                        deny: 'VIEW_CHANNEL',
                        id: guild.id
                    },

                    {
                        allow: 'VIEW_CHANNEL',
                        id: "593218059796480025"
                    },
                    {
                      allow: 'VIEW_CHANNEL',
                      id: "593216966727172106"
                    },
                    {
                      allow: 'VIEW_CHANNEL',
                      id: "593216426110877726"
                    },
                    {
                      allow: 'VIEW_CHANNEL',
                      id: "593216109465960505"
                    },
                
                 ]
            }).then((createdChan) => {createdChan.setParent(categoryId).then(ch => {
              userTickets.set(user.id, ch.id);
              let embedParent = new Discord.RichEmbed()
            .setAuthor(`Ticket aberto por: ${user.username}#${user.discriminator}`, user.displayAvatarURL)
            .setColor("2f3136")
            .addField("O seu ticket foi aberto com sucesso!", `<:seta:714972819028443158> Esclareça aqui, qual o seu problema/dúvida e aguarde nossa Equipe.`)
            .setImage("https://i.imgur.com/BHVgafF.png")
        
            ch.send("<@" + user.id + ">");  
            ch.send(embedParent)
            }).catch(err => console.log(err));
          })
          }
    }
    else if(reaction.emoji.name === '✅') {
        if(userTickets.has(user.id)) {
            if(reaction.message.channel.id === userTickets.get(user.id)) {
                let embed = new Discord.RichEmbed();
                embed.setDescription("O Ticket será fechado em 5 segundos.")
                reaction.message.channel.send(embed);
                setTimeout(() => {
                    reaction.message.channel.delete('Encerrando ticket...')
                    .then(channel => {
                        console.log("Apagou " + channel.name);
                    })
                    .catch(err => console.log(err));
                }, 5000);
            }
        }
        else if(reaction.message.guild.channels.some(channel => channel.name.toLowerCase() === user.username + 's-ticket')) {
            let embed = new Discord.RichEmbed();
            embed.setDescription("O Ticket será fechado em 5 segundos...");
            reaction.message.channel.send(embed);
            setTimeout(() => {
                reaction.message.guild.channels.forEach(channel => {
                    if(channel.name.toLowerCase() === user.username + 's-ticket') {
                        channel.delete().then(ch => console.log('Canal deletado ' + ch.id))
                    }
                });
            }, 5000);
        }
    }
})





// SISTEMA AO ENTRAR NO SERVIDOR

client.on('guildMemberAdd', (member) => {
   const embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.username}#${member.user.discriminator}`)
    .setColor("RANDOM")
    .setThumbnail(`${member.user.avatarURL}`)
    .setTitle(`:wave:Bem-vindo(a)!`)
    .setDescription(`Olá ${member.user} bem vindo ao servidor oficial do servidor de Minecraft ObyCraft. Leia as regras e se divirta!`)
    .setFooter(`ID do usuário: ${member.user.id}`)
  member.guild.channels.get("593226174835195904").send({ embed });
  member.guild.channels.reply;

  const captcha = new Discord.RichEmbed()
    .setAuthor(`Captcha ⚙`)
    .setColor("RANDOM")
    .setTitle(`Bip bup bip? Confirme que você não é um robô 🤖`)
    .setDescription(`Clique na reação "✅" abaixo.`)
    .setFooter(`Seu ID: ${member.user.id}`, member.user.avatarURL);


  member.guild.channels.get("615260260923605014").send(`${member.user}`);
  member.guild.channels.get("615260260923605014").send(captcha).then(embedMessage => {
    embedMessage.react("✅");
    const admfilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === member.id;
    const adm = embedMessage.createReactionCollector(admfilter, { time: 30000000 });

    let role1 = member.guild.roles.find(role => role.name == '🏴| Membro');
    let role2 = member.guild.roles.find(role => role.name == 'Não verificado');


    adm.on('collect', () => {
      member.addRole(role1)
      member.removeRole(role2)

console.log();

      member.guild.channels.get("615260260923605014").send(`${member.user} Você foi verificado, já pode sair deste canal.`);

});


  })

  let role = member.guild.roles.find(role => role.name == 'Não verificado');
  member.addRole(role);
})

// LIGANDO O BOT

bot.login(config.token)