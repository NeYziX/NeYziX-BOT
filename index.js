const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("&");

bot.on("ready", function() {
    bot.user.setGame("Aide | &help");
    console.log("Connecté avec succès")
});

bot.login("NDMyMjA1ODMzNzIwNDMwNjEy.DaqD3A.T9soBVTbtefWwZOFR3U6zb6bUi0");


bot.on('message', message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    command = args.shift().toLowerCase();

    if (command === "kick") {
        let modRole = message.guild.roles.find("name", "Fondateurs");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("Erreur : Permissions insuffisantes.").catch(console.error);           
        }
        if(message.mentions.users.size === 0) {
            return message.reply("Erreur : Mentionne la personne à expluser.").catch(console.error);
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
            return message.reply("Cet utilisateur est introuvable ou impossible à expulser.")
        }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("Je n'ai pas les permissions pour faire ceci.").catch(console.error);
        }
        kickMember.kick().then(member => {
            message.reply(`${member.user.username} a été expulsé avec succès.`).catch(console.error);
            message.guild.channels.find("name", "general").send(`**${member.user.username}** a été kick par **${message.author.username}.**`)
        }).catch(console.error)

    }



bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("```⇩Liste des commandes⇩: \n &help \n &site \n &invite```");
        message.delete();
    }

    if (message.content === prefix + "site"){
        message.channel.sendMessage("```NeYziX's Shop : http://neyzix.000webhostapp.com```");
        message.delete(); 
    }

    if (message.content === prefix + "invite"){
        message.channel.sendMessage("```⇩Pour mettre me mettre sur ton serveur Discord⇩:\n https://discordapp.com/oauth2/authorize?client_id=432205833720430612&permissions=8&scope=bot```");
        message.delete();
    }
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "general").send(`Bienvenue ${member} sur la **NeYziX Commnunity**`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "general").send(`Aurevoir ${member}`)
})

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'Membres');
    member.addRole(role)
})
