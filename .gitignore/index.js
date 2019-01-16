const discord = require('discord.js'); 

const client =  new discord.Client();

const { Client, Attachment } = require('discord.js');



const prefix = "?";


client.login('NTM0MDQ2Mjg4MjQ1OTQ4NDI3.Dxz46Q.Aoa3KppkN14Asle0uxKXtVPZSdI')
.then(result=>{
    console.log("Connexion reussie 1", result);   
}).catch(error => {
    console.log("Erreur lors du login... Message :",error);    
});

client.on('ready', function() {
    console.log("I'm Ready !");


    client.on('message', message => {
        if (message.content === 'what is my avatar') {
            const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
            message.reply(message.author.avatarURL);
        }
    });
    

    client.on('message', message => {
        if (message.content === '!rip') {
                   message.channel.send(attachment);
        }
    });

    client.on('message', msg => {
        const guildTag = msg.channel.type === 'text' ? `[${msg.guild.name}]` : '[DM]';
        const channelTag = msg.channel.type === 'text' ? `[#${msg.channel.name}]` : '';
        console.log(`${guildTag}${channelTag} ${msg.author.tag}: ${msg.content}`);
      });
    

client.on('message', message => {
    if(message.content === "?help") {
        message.channel.send({embed: {
            color: 3447003,
            title: 'Help !',
            url: 'https://www.google.com',
            description: `
**what is my avatar**
-pour que le bot vous envoie votre avatar url.

**!rip**
-pour que le bot envoie un message ***RIP***.

__Pour le staff__

**?ban + mentions**
-pour que le bot ban le joueur.

**?mute + mentions** 
-pour que le bot mute le joueur

**?clear + 1-100**
-pour que le bot clear des messages.

**?kick + mentions**
-pour que le bot kick le joueur.

~~Pour pouvoir utilisé les commandes du staff, ils vous faut quelque perms~~`
        }});
        
    }
});

channel.clone(undefined, true, false, 'Needed a clone')
  .then(clone => console.log(`Cloned ${channel.name} to make a channel called ${clone.name}`))
  .catch(console.error);

  channel.bulkDelete(5)
  .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
  .catch(console.error);

  channel.createInvite()
  .then(invite => console.log(`Created an invite with a code of ${invite.code}`))
  .catch(console.error);

  const filter = m => m.content.includes('discord');
const collector = channel.createMessageCollector(filter, { time: 15000 });
collector.on('collect', m => console.log(`Collected ${m.content}`));
collector.on('end', collected => console.log(`Collected ${collected.size} items`));

channel.createWebhook('Snek', 'https://i.imgur.com/mI8XcpG.jpg')
  .then(webhook => console.log(`Created webhook ${webhook}`))
  .catch(console.error)

  channel.delete('Making room for new channels')
  .then(deleted => console.log(`Deleted ${deleted.name} to make room for new channels`))
  .catch(console.error);

  channel.edit({ name: 'new-channel' })
  .then(console.log)
  .catch(console.error);

  channel.fetchMessage('99539446449315840')
  .then(message => console.log(message.content))
  .catch(console.error);

  channel.fetchMessages({ limit: 10 })
  .then(messages => console.log(`Received ${messages.size} messages`))
  .catch(console.error);

  channel.fetchMessages()
  .then(messages => console.log(`${messages.filter(m => m.author.id === '84484653687267328').size} messages`))
  .catch(console.error);

  channel.fetchPinnedMessages()
  .then(messages => console.log(`Received ${messages.size} messages`))
  .catch(console.error);

  channel.fetchWebhooks()
  .then(hooks => console.log(`This channel has ${hooks.size} hooks`))
  .catch(console.error);

  message.channel.overwritePermissions(message.author, {
    SEND_MESSAGES: false
  })
    .then(updated => console.log(updated.permissionOverwrites.get(message.author.id)))
    .catch(console.error);
  // Overwite permissions for a message author and reset some
  message.channel.overwritePermissions(message.author, {
    VIEW_CHANNEL: false,
    SEND_MESSAGES: null
  })
    .then(updated => console.log(updated.permissionOverwrites.get(message.author.id)))
    .catch(console.error);

    channel.replacePermissionOverwrites({
        overwrites: [
          {
             id: message.author.id,
             denied: ['VIEW_CHANNEL'],
          },
        ],
          reason: 'Needed to change permissions'
        });

        
        channel.search({
            content: 'discord.js',
            before: '2016-11-17'
          }).then(res => {
            const hit = res.messages[0].find(m => m.hit).content;
            console.log(`I found: **${hit}**, total results: ${res.totalResults}`);
          }).catch(console.error)

          channel.send('hello!')
  .then(message => console.log(`Sent message: ${message.content}`))
  .catch(console.error);

  channel.send({
    files: ['https://cdn.discordapp.com/icons/222078108977594368/6e1019b3179d71046e463a75915e7244.png?size=2048']
  })
    .then(console.log)
    .catch(console.error);
  // Send a local file
  channel.send({
    files: [{
      attachment: 'entire/path/to/file.jpg',
      name: 'file.jpg'
    }]
  })
    .then(console.log)
    .catch(console.error);
  // Send an embed with a local image inside
  channel.send('This is an embed', {
    embed: {
      thumbnail: {
           url: 'attachment://file.jpg'
        }
     },
     files: [{
        attachment: 'entire/path/to/file.jpg',
        name: 'file.jpg'
     }]
  })
    .then(console.log)
    .catch(console.error);

    channel.setName('not_general')
  .then(newChannel => console.log(`Channel's new name is ${newChannel.name}`))
  .catch(console.error);

  channel.setParent('174674066072928256')
  .then(updated => console.log(`Set the category of ${updated.name} to ${updated.parent.name}`))
  .catch(console.error);

  channel.setPosition(2)
  .then(newChannel => console.log(`Channel's new position is ${newChannel.position}`))
  .catch(console.error);

  channel.setTopic('Needs more rate limiting')
  .then(updated => console.log(`Channel's new topic is ${updated.topic}`))
  .catch(console.error);

  console.log(`Hello from ${channel}`);
  console.log('Hello from ' + channel);

/*Arrivants*/

client.on('guildMemberAdd', member =>{
    member.guild.channels.get('526147539209027595').send(' :tada: Bienvenue ' + member.user + ': Nous vous attendions pour faire la fête ! :tada: Nous sommes maintenant ' + member.guild.memberCount);
    console.log('+1')
    member.addRole('526152806298812436')

})

client.on('guildMemberRemove', member =>{
    member.guild.channels.get('526147539209027595').send(' :cry: Aurevoir ' + member.user );
    console.log('-1')
})

/*Kick*/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande :rage:")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
        if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur, il doit être très fort :sunglasses:")
        member.kick()
        message.channel.send("**"+member.user.username + '** a été exclu :white_check_mark:')
    }
});

/*Ban*/
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande :rage:")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur, il doit être très fort :sunglasses:")
       message.guild.ban(member, {days: 7})
       message.channel.send("**"+member.user.username + '** a été banni :white_check_mark:')
    }
});

/*Clear*/
client.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = args[1]
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(parseInt(count) + 1)
    }
/*Mute*/
if (args[0].toLowerCase() === prefix + "mute") {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("Membre introuvable")
    if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
    if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne peux pas mute ce membre")
    let muterole = message.guild.roles.find(role => role.name === 'Muted')
    if (muterole) {
        member.addRole(muterole)
        message.channel.send(member + ' a été mute :white_check_mark:')
    }
    else {
        message.guild.createRole({name: 'Muted', permissions: 0}).then((role) => {
            message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {
                channel.overwritePermissions(role, {
                    SEND_MESSAGES: false
                })
            })
            member.addRole(role)
            message.channel.send(member + ' a été mute :white_check_mark:')
        })
    }
}
});  });
