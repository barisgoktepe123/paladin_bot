const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '?'

client.on('ready', () => {
  console.log(` ${client.user.tag} İSİMLİ BOT SUNUCULARA GİRİŞ YAPTI!!!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }

  if (msg.content === 'Günaydın') {
    msg.reply('Sanada Günaydın "3');
  }
    
    if (msg.content ===  'profil resimim') {
      msg.channel.send(msg.author.avatarURL);
  }
  
  
  
});

client.login('NDkyMzk4MzkyMjUzNjEyMDcz.DoaQVw.odJPnJIA9O2Y0MIIVitaCgiL0cM');