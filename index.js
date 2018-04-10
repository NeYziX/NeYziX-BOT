const Discord = require('discord.js');
const bot = new discord.Client();

var prefix = ("&");

bot.on("ready", function() {
  
  bot.user.setGame("&help | By NeYziX")
  console.log("le bot a démarré"); 
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

