const Discord = require('discord.js'),
    moment = require('moment')
 
module.exports = {
    run: (message, args, client) => {
        let avatar = message.mentions.users.size ? 
        member =  message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
        const member = message.mentions.members.first() || message.member
        message.channel.send(new Discord.MessageEmbed()
            .addField('Membre', member, true)
            .addField('Tag', member.user.tag, true)
            .addField('Date de création du compte', moment(member.user.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
            .addField('Date d\'arrivée sur le serveur', moment(member.joinedAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
            .addField('Date de début de boost', member.premiumSince ? moment(member.premiumSince).format('[Le] DD/MM/YYYY [à] HH:mm:ss') : 'Ne boost pas', true)
            .addField('Infractions', client.db.warns[member.id] ? client.db.warns[member.id].length : 'Aucune', true)
            .setThumbnail(avatar)
            .setFooter(`ID : ${member.id}`))
    },
    name: 'user-inf',
    guildOnly: true,
    help: {
        description: 'Cette commande permet d\'avoir des infos sur un user .',
        syntax: ' + {mention de la perssone dans vous vouler  avoir des infos }'
    }
}