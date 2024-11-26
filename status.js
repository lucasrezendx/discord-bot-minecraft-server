const Discord = require('discord.js');
const client = new Discord.Client();
client.login("NjA5ODM0Mzg4MjI1NTIzNzI2.XU8eqQ.UbV0RRzURDRJZG3zwf2HwuFdGqw");
const request = require('request');
const config = {    
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
        ip: "jogar.obycraft.com", //ip for server
        port: 25565 //port 
    }
};


// IMPORTANT: You need to run "npm install request" (without quotes) in your terminal before executing this script

client.on('message', message => {
    if (message.content === config.commands.status.command) {
        let url = 'http://mcapi.us/server/status?ip=' + config.server.ip + '&port=' + config.server.port;
        request(url, function(err, response, body) {
            if(err) {
                console.error(err);
                return message.reply(config.commands.status.messages.error);
            }

            body = JSON.parse(body);
const serveron = new Discord.RichEmbed() // Formar embed.
.setColor("00FF7F") // Cor hexadecimal.
.setAuthor(`Status: Online`) // Titulo.
.addField(`O servidor está atualmente com ${body.players.now} jogadores simultâneos.`, 'Acesse nosso servidor pelo endereço: jogar.obycraft.com')
.setFooter(`obycraft.com`, message.guild.iconURL)
.setTimestamp(new Date ())

let offline = new Discord.RichEmbed()
.setColor("F60E03")
.setAuthor(`Status: Offline`)
.addField(`O servidor está atualmente Offline.`, 'Você poderá acessar nosso servidor pelo endereço: jogar.obycraft.com')
.setFooter(`obycraft.com`, message.guild.iconURL)
.setTimestamp(new Date ())
       
            var status = offline;
            if (body.online) {
                status = serveron;          
            }
            message.channel.send(status);
        });
    }

});