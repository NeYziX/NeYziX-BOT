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
        message.channel.sendMessage("```⇩Liste des commandes⇩: \n &help \n &site \n &prix```");
        message.delete();
    }

    if (message.content === prefix + "site"){
        message.channel.sendMessage("```NeYziX's Shop : http://neyzix.000webhostapp.com```");
        message.delete(); 
    }

    if (message.content === prefix + "achat"){
        message.channel.sendMessage("`{user.username}``");
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
