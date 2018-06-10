//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
var client = new Discord.Client();
const prefix = ".";
var test = 0;
var lastTime;
var key = 1;
var int1;
var NOTIFY_CHANNEL;

function msToTime(timeMS) {
      var timeString;
      var seconds = parseInt((timeMS/1000)%60)
          ,minutes = parseInt((timeMS/(1000*60))%60)
          ,hours = parseInt((timeMS/(1000*60*60))%24);
      if(hours > 0){
        timeString = hours + " hours"
      }else if (minutes > 0) {
        timeString = minutes + " minutes"
      }else if (seconds > 0) {
        timeString = seconds + " seconds"
      }
      return timeString;
}
//ON LOGIN----------------------------------------------------------------------
client.on('ready', () => {
    client.user.setActivity("tntdetectors.com");
    console.log('successfully Logged In As Wall Check Bot!');
    NOTIFY_CHANNEL = client.channels.find("name", "wall-check"); // Channel to send notification

//SET INTERVAL------------------------------------------------------------------
    int1 = setInterval(function cannuner(){
    if(test == 1 && (key != 0)){

        NOTIFY_CHANNEL.sendMessage('@here ```nobody has checked walls in 30 minutes```', {tts: true});

    }
    else{
        key = 1
        test = 1}
    }, 1800000);
//1200000 = 20 mins 900000 = 15 mins  1500000 = 25 mins 1800000 = 30 mins https://www.timecalculator.net/seconds-to-milliseconds
} //1 second = 1000 ms
);
//CHECKED-----------------------------------------------------------------------
client.on('message', message => {
  if (message.content == prefix + 'check') {
    lastSender = message.guild.lastSender = message.author
    lastTime = new Date()

    NOTIFY_CHANNEL.sendMessage('Walls have been checked, thanks!')
    key = 0 }
});
//WEEWOO------------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "weewoo") {
    NOTIFY_CHANNEL.sendMessage('specify direction .weewoo south/west/east/north');
  }
});
//WEEWOO NORTH------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "weewoo north") {
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM NORTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM NORTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM NORTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM NORTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM NORTH SIDE**', {tts: true});
  }
});
//WEEWOO EAST-------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "weewoo east") {
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM EAST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM EAST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM EAST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM EAST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM EAST SIDE**', {tts: true});
  }
});
//WEEWOO SOUTH------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "weewoo south") {
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM SOUTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM SOUTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM SOUTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM SOUTH SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM SOUTH SIDE**', {tts: true});
  }
});
//WEEWOO WEST-------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "weewoo west") {
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM WEST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM WEST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM WEST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM WEST SIDE**', {tts: true});
    NOTIFY_CHANNEL.sendMessage('@everyone **BEING RAIDED FROM WEST SIDE**', {tts: true});
  }
});
//WALLS-------------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "walls") {
    if (message.guild.lastSender) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setTitle('꧁⎝⧹❤Ƹ̵̡Ӝ̵̨̄ƷWall Stats ᓭ(◕‿◕✿)ᓯ❤⧸⎠ ꧂')
    .addField('Wall Status Factions', 'Last .checked was by @' + message.guild.lastSender.username)
    .addField('Time Since Last ```.Checked```', msToTime(Math.abs(new Date() - lastTime)) + " ago.")
    .addField('Time Until Reminder', msToTime(30*60*1000 - Math.abs(new Date() - lastTime)))
    .setThumbnail("https://cdn3.iconfinder.com/data/icons/minecraft-icons/512/tnt.png")
    .setURL("http://www.tntdetectors.com")
      NOTIFY_CHANNEL.sendEmbed(embed)
    }
    else {
      NOTIFY_CHANNEL.sendMessage("```do .check and then i'll tell u ;)```")
    }
  }
});

client.on ('message', message => {
  if (message.content === prefix + "help") {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
	.addField('.Check - when you have checked the walls')
	.addField('.Weewoo (side) - if we are getting raided')
      NOTIFY_CHANNEL.sendEmbed(embed)
  }
})
//LOGIN TOKEN-------------------------------------------------------------------
client.login(prosses.env.BOT_TOKEN);
