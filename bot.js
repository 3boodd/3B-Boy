const Discord = require("discord.js");
const client = new Discord.Client();

client.on('voiceStateUpdate', (Codes, ReBeL) => {
    let channel3 = ["469575636432846870"];
client.channels.get(channel3)
ReBeL.guild.member(ReBeL).addRole(ReBeL.guild.roles.find("name", "ولد")).then(r => {
      });
console.log("Done");
});
  client.on('voiceStateUpdate', (codes, ReBeL) => {
if(ReBeL.voiceChannelID !== "469575636432846870") return console.log("أيرور . ");
ReBeL.guild.createChannel(ReBeL.user.username , 'voice').then((rebeeel) =>{
ReBeL.guild.members.get(ReBeL.id).setVoiceChannel(rebeeel.id).then((codess) =>{
  console.log("تــــــم .");
  let scan = setInterval(()=>{
  rebeeel.delete();
  }, 305);
});
});
});
  
client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا 
