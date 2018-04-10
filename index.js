const discord = require('discord.js');
const bot = new discord.Client();

var prefix = ("&");

bot.on("ready", function() {

  console.log(`le bot a démarré avec,  ${client.users.size} personnes, dans ${client.guilds.size} serveurs`); 
  bot.user.setGame(`&help | ${client.guilds.size} serveurs`)
});

bot.login("NDMyOTc4MzcxMDc3NDcyMjU3.Da1KDg.GuaCfKr5JhXz2RjL4z4QPVRcTpU");

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
        .addField("Lien :", "https://discordapp.com/oauth2/authorize?client_id=432978371077472257&permissions=8&scope=bot")
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
    member.guild.channels.find("name", "arrivé-départ").send(`Bienvenue à ${member} sur le serveur ;)`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "arrivé-départ").send(`Aurevoir ${member}.`)
});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'Membres 🌟');
    member.addRole(role)
})
