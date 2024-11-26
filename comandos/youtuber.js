const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
if(message.channel.id === "698056640439648316"){ 
    if(args.length === 0) {
        let embed = new Discord.RichEmbed()
        .setAuthor(`Soliciando tag | ▶️`)
        .setDescription(`▫ ${message.author.username}, para solicitar sua tag no servidor, precisamos que você responda um questionário que enviamos no seu privado.`)
        .setColor("2f3136")
        
        
        message.reply(embed)
    }

    let embedc = new Discord.RichEmbed()
    .setAuthor(`Solicitando Tag.`)
    .setDescription(`▫ Para prosseguir digite "ok"`)
    .setColor("2f3136")
        
    
    

    function emoji (id) {
        return client.emojis.get(id).toString();

    }

    message.author.send(embedc).then(async msg => {
        const collector = await message.author.dmChannel.createMessageCollector(m => m.author = message.author, {time: 30000})
        collector.on('collect', dm => {
            if (dm.content === 'ok') {
                collector.stop()
                msg.delete().then(async () => {
                    let ok = dm.content

                    let embed1 = new Discord.RichEmbed()
                    .setDescription("Qual é o seu nick no servidor? `[▮▯▯▯]`")
                    .setColor("2f3136")
                    message.author.send(embed1).then(msg => {
                        setTimeout(() => {
                            msg.delete();

                        }, 50000);

                        var uwc = message.author.dmChannel.createMessageCollector(m => m.author.id == message.author.id, {time: 30000, max: 1 })
                        uwc.on('collect', dm => {
                            let nick = dm.content;


                            let embed2 = new Discord.RichEmbed()
                            .setDescription("Qual tag você deseja? `[▮▮▯▯]`")
                            .setColor("2f3136")
                            message.author.send(embed2).then(msg => {
                                setTimeout(() => {
                                    message.delete();

                                }, 50000);
                                
                            });

                            var uwc = message.author.dmChannel.createMessageCollector(m => m.author.id == message.author.id, {time: 30000, max: 1 })
                            uwc.on('collect', dm => {
                                let tag = dm.content;


                            



                            let embed3 = new Discord.RichEmbed()
                            .setDescription("Quantos inscritos você tem? `[▮▮▮▯]`")
                            .setColor("2f3136")
                            message.author.send(embed3).then(msg => {
                                setTimeout(() => {
                                    msg.delete();

                                }, 50000);

                            });

                            var uwc = message.author.dmChannel.createMessageCollector(m => m.author.id == message.author.id, {time: 30000, max: 1 })
                            uwc.on('collect', dm => {
                                let inscritos = dm.content;


                                let embed4 = new Discord.RichEmbed()
                                .setDescription("Qual o link do seu video (gravado na rede) ? `[▮▮▮▮]`")
                                .setColor("2f3136")
                                message.author.send(embed4).then(msg => {
                                    setTimeout(() => {
                                        msg.delete()

                                    }, 50000);

                                });

                                    var uwc = message.author.dmChannel.createMessageCollector(m => m.author.id == message.author.id, {time: 30000, max: 2 })
                                    uwc.on('collect', dm => {
                                        let video = dm.content;


                                        let embed7 = new Discord.RichEmbed()
                                        .setAuthor('✅ | Solicitação enviada com sucesso!')
                                        .setDescription("Aguarde até que um Membro da Equipe avalie sua solicitação.", "\ u200b")
                                        .setColor("2f3136")
                                        message.author.send(embed7).then(msg => {
                                            setTimeout(() => {
                                                msg.delete();

                                            }, 50000);

                                        });
                                        

                                    const embedT = new Discord.RichEmbed()
                                    .setAuthor(`Tag solicitada por: ${message.author.username}`, message.author.avatarURL)
                                    .setColor("2f3136")
                                    .addField(message.guild.emojis.get('714972819028443158') + ` Nickname »`, nick, false)
                                    .addField(message.guild.emojis.get('714972819028443158') + ` Tag desejada »`, tag, false)
                                    .addField(message.guild.emojis.get('714972819028443158') + ` Número de inscritos »`, inscritos, false)
                                    .addField(message.guild.emojis.get('714972819028443158') + ` Link do vídeo »`, video, false)
                                    .setTimestamp(new Date ())
                                    message.guild.channels.get("715018817528397844").send(embedT);





                                    






                                  })

                                })
                            })
                        })

                    })

                })

            };

        })

    })
} else {
    const nao_perm = new Discord.RichEmbed()
        .setColor("2f3136")
        .setAuthor(`Algo deu errado!`, message.guild.iconURL)
        .setDescription("Você só poder executar comandos no chat ``#💻┃comandos``")
  
        message.channel.bulkDelete(1).then(() => {
          message.reply(nao_perm).then(msg => msg.delete(6000));
})};   
}

exports.help = {
    name:"youtuber"
}