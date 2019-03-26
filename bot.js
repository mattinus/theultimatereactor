const Discord = require('discord.js');
const client = new Discord.Client();.

client.on('ready', () => {
  console.log(`Connecté sur ${client.user.tag}!`);
	
	function doStuff() {
var myArray = [
  "TheUltimateReactor",
  "Ready to make you a star !",
  "On The JS LABS !"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
   client.user.setPresence({
        game: {
            name: randomItem,
            type: "STREAMING"
            url: "https://www.twitch.tv/le_jarl_besthial"
        }
    });
}
setInterval(doStuff, 3000);
  
});

client.on('message', (message, member, async) => {
if (message.author.id !== 352176756922253321) return;
    message.react('👍');
}

client.login("NTU2MTUwOTg1OTM2ODYzMjUy.D3vuvQ.ok2rd47jPVNVYWOqtnnn_BgIwZ0");
