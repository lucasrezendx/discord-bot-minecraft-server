const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
if(message.channel.id === "698056640439648316"){ 
    if(args.length === 0) {
        let embed = new Discord.RichEmbed()
        .setAuthor(`Enviando sugestão | 📬`)
        .setDescription(`▫ ${message.author.username}, para enviar sua sugestão para o servidor, precisamos que você responda um questionário que enviamos no seu privado.`)
        .setColor("2f3136")
        
        message.reply(embed)
    }

    let embedc = new Discord.RichEmbed()
    .setAuthor(`Enviando sua sugestão ao servidor.`)
    .setDescription(`▫ Para prosseguir digite "ok"`)
    .setColor("2f3136")
    
    

    

    message.author.send(embedc).then(async msg => {
        const collector = await message.author.dmChannel.createMessageCollector(m => m.author = message.author, {time: 30000})
        collector.on('collect', dm => {
            if (dm.content === 'ok') {
                collector.stop()
                msg.delete().then(async () => {
                    let ok = dm.content

                    let embed1 = new Discord.RichEmbed()
                    .setDescription("**Qual é o seu nick no servidor? `[▮▯▯]`**")
                    .setColor("2f3136")
                    message.author.send(embed1).then(msg => {
                        

                        var uwc = message.author.dmChannel.createMessageCollector(m => m.author.id == message.author.id, {time: 30000, max: 1 })
                        uwc.on('collect', dm => {
                            let nick = dm.content;


                            let embed2 = new Discord.RichEmbed()
                            .setDescription("**Qual a sua sugestão para nosso servidor? `[▮▮▯]`**")
                            .setColor("2f3136")
                            message.author.send(embed2)

                            var uwc = message.author.dmChannel.createMessageCollector(m => m.author.id == message.author.id, {time: 30000, max: 1 })
                            uwc.on('collect', dm => {
                                let sugestao = dm.content;


                            



                            let embed3 = new Discord.RichEmbed()
                            .setDescription("**Por que sua sugestão deve ser implementada? `[▮▮▮]`**")
                            .setColor("2f3136")
                            message.author.send(embed3)

                            var uwc = message.author.dmChannel.createMessageCollector(m => m.author.id == message.author.id, {time: 30000, max: 1 })
                            uwc.on('collect', dm => {
                                let pq = dm.content;

                            let embed7 = new Discord.RichEmbed()
                                        .setAuthor("✅ | Sugestão enviada com sucesso!")
                                        .setDescription("Obrigado por colaborar com o servidor, a sua sugestão será avaliada.")
                                        .setColor("2f3136")
                                        message.author.send(embed7)

                                        
                                        

                                    const embedT = new Discord.RichEmbed()
                                    .setAuthor(`Sugestão enviada por: ${message.author.username}`, message.author.avatarURL)
                                    .setColor("2f3136")
                                    .addField(message.guild.emojis.get('714972819028443158') + ` Nickname »`, nick, false)
                                    .addField(message.guild.emojis.get('714972819028443158') + ` Sugestão »`, sugestao, false)
                                    .addField(message.guild.emojis.get('714972819028443158') + ` Por quê ela deve ser implementada?`, pq, false)
                                    message.guild.channels.get("698056735482445924").send(embedT).then(embedMessage => {
                                        embedMessage.react(message.guild.emojis.get('611012568349278240'))
                                        .then(() => embedMessage.react(message.guild.emojis.get('611010298148683797')));
                                    })  


                                    
                                })

                            })
                        })
                    })

            

            

        });

    };});});} else {
        const nao_perm = new Discord.RichEmbed()
        .setColor("2f3136")
        .setAuthor(`Algo deu errado!`, message.guild.iconURL)
        .setDescription("Você só poder executar comandos no chat ``#💻┃comandos``")
  
        message.channel.bulkDelete(1).then(() => {
          message.reply(nao_perm).then(msg => msg.delete(6000));
      });  
    }}

              

exports.help = {
name:"sugerir"
}