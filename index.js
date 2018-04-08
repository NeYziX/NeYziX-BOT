const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("&");

bot.on("ready", function() {
    bot.user.setGame("Aide | &help");
    console.log("Connecté avec succès")
});

bot.login("NDMyMjA1ODMzNzIwNDMwNjEy.DaqD3A.T9soBVTbtefWwZOFR3U6zb6bUi0");

bot.on('message', message => {

    if (message.content === prefix + "infodiscord") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information de Discord :")
        .addField("Nom du Discord :", message.guild.name)
        .addField("Crée le :", message.guild.createdAt)
        .addField("Tu as rejoin le :", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord :", message.guild.memberCount)
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    message.delete();
    }
});

bot.on('message', message => {

    if (message.content === prefix + "invite") {
        var embed = new Discord.RichEmbed()
        .setDescription("Pour m'inviter sur ton Discord :")
        .addField("Lien :", "https://discordapp.com/oauth2/authorize?client_id=432205833720430612&permissions=8&scope=bot")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    message.delete();
    }
});

bot.on('message', message => {

    if (message.content === prefix + "shop") {
        var embed = new Discord.RichEmbed()
        .setDescription("Pour visiter le NeYziX-s Shop :")
        .addField("Lien :", "http://neyzix.000webhostapp.com")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    message.delete();
    }
});

bot.on('message', message => {

    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
        .setDescription("⇩Liste des commandes⇩:")
        .addField("&help", "Pour afficher la liste les commandes")
        .addField("&infodiscord", "Pour afficher les informations du Discord")
        .addField("&shop", "Pour afficher le shop de NeYziX")
        .addField("&invite", "Pour m'inviter sur ton Discord")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    message.delete();
    }
});


bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "general").send(`Bienvenue ${member} sur la **NeYziX Commnunity**`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "general").send(`Aurevoir ${member}`)
});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'Membres');
    member.addRole(role)
})
