const Discord = require('discord.js');
const fs = require('fs')
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Amir ${ client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === 'ريم') {
    message.channel.send('متكلمنيش اديني رتبة الاول :cold_sweat: ');
  }
});

client.on('message', message => {
  if (message.content === 'helpp') {
    message.author.send('مازال البوت تحت التطوير');
  }
});

client.on('message', message => {
    if (message.content.startsWith("صورتي")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
  if (message.content === 'ميجو') {
    message.channel.send('اخويا اللي معنديش غيروا و دايما واقف جنبي في الحلوةو المرا ربنا يخليك ليا :heart: ');
  }
});

client.on('message', message => {
  if (message.content === 'ءفءح') {
    message.channel.send('بعد الفطار هظبطك');
  }
});

client.on('message', message => {
  if (message.content === 'باك') {
    message.channel.send('ولكم');
  }
});
client.login('NTgwODE1MzAzNDkyMjM5MzYx.XOWMmQ.E8B0mt-3erApMuPIZl0yZjLw-l8');