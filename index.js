const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("&");

bot.on("ready", function() {
    bot.user.setGame("Aide | &help");
    console.log("Connecté avec succès")
});

bot.login("NDMyMjA1ODMzNzIwNDMwNjEy.DaqD3A.T9soBVTbtefWwZOFR3U6zb6bUi0");


bot.on('message', message => {

    if (message.content === prefix + "help"){
        message.channel.sendMessage("```⇩Liste des commandes⇩: \n &help \n &site \n &invite```");
        message.delete();
    }

    if (message.content === prefix + "infodiscord")
        var embed = new Discord.RichEmbed()
        .setDescription("Information de Discord")
        .addField("Nom du Discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord", message.guild.memberCount)
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)

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
