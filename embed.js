const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        
            .setTitle('Verification : ')
            .setColor('RANDOM')
            .addField(' coche la réaction pour avoir ton role  ', true)
            .setAuthor('kazouya   ', 'https://cdn.discordapp.com/attachments/800039569655070725/800186290175606804/standard.gif')
            .setImage('https://cdn.discordapp.com/attachments/800039569655070725/800187025718116352/Newsletter3.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/800039569655070725/800186524620292116/static_1.png')
            .setFooter('Mon bot perso **bonjour**', 'https://cdn.discordapp.com/attachments/800039569655070725/800186290175606804/standard.gif')
            .setTimestamp())
            message.delete();

    },
    name: 'verif'
}