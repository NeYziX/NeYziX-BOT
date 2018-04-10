const Discord = require('discord.js');
const bot = new discord.Client();

var prefix = ("&");

bot.on("ready", function() {
  
  bot.user.setGame("&help | By NeYziX")
  console.log("le bot a démarré"); 
});

bot.login("NDMyOTc4MzcxMDc3NDcyMjU3.Da6j7A.NUwLR9AUfqVb8eYypC8giIixHhQ");

bot.on('message', message => {
if (message.content === prefix + "invite") {
  var embed = new discord.RichEmbed()
  .setDescription("Pour m'inviter sur ton Discord :")
  .addField("Lien :", "https://discordapp.com/oauth2/authorize?client_id=432978371077472257&permissions=8&scope=bot%22")
  .setColor("0x81DAF5")
message.channel.sendEmbed(embed)
message.delete();
};

bot.on('message', message => {

if (message.content === prefix + "shop") {
  var embed = new discord.RichEmbed()
  .setDescription("Pour visiter le NeYziX-s Shop :")
  .addField("Lien :", "http://neyzix.000webhostapp.com/%22")
  .setColor("0x81DAF5")
  message.channel.sendEmbed(embed)
  message.delete();
}
});

bot.on('message', message => {

if (message.content === prefix + "help") {
  var embed = new discord.RichEmbed()
  .setDescription("⇩Liste des commandes⇩:")
  .addField("&help", "Pour afficher la liste les commandes")
  .addField("&infodiscord", "Pour afficher les informations du Discord")
  .addField("&shop", "Pour afficher le shop de NeYziX")
  .addField("&invite", "Pour m'inviter sur ton Discord")
  .setColor("0x81DAF5")
message.channel.sendEmbed(embed)
message.delete();
}







bot.on("guildMemberAdd", member => {
  member.guild.channels.find("name", "arrivé-départ").send("Bienvenue à ${member} sur le serveur ;")
});

bot.on("guildMemberRemove", member => {
  member.guild.channels.find("name", "arrivé-départ").send("Aurevoir ${member}.")
});

bot.on("guildMemberAdd", member => {
  var role = member.guild.roles.find('name', 'Membres 🌟');
  member.addRole(role)
})
})})
