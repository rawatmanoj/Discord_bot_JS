const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const { prefix, token } = require('./config.json');
const SteamAPI = require('steamapi');
const steam = new SteamAPI('2C453FB635DBAD14B79C08EBEDB43FB9');
const axios = require('axios');

Structures.extend('Guild', Guild => {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        nowPlaying: null,
        songDispatcher: null,
        volume: 1
      };
      this.triviaData = {
        isTriviaRunning: false,
        wasTriviaEndCalled: false,
        triviaQueue: [],
        triviaScore: new Map()
        };
    }
  }
  return MusicGuild;
});

const client = new CommandoClient({
  commandPrefix: prefix,
  owner: '346328380175679499' // change this to your Discord user ID
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['music', 'Music Command Group'],
    ['gifs', 'Gif Command Group'],
    ['other', 'random types of commands group'],
    ['guild', 'guild related commands']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    eval: false,
    prefix: false,
    commandState: false,
    kick:false,
    help:false
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));

  //console.log(commands);

client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity(`${prefix}krunker and Roasting Somnath`, {  
    type: 'PLAYING',

  });
//76561198258642665
// steam.getUserSummary('76561198146931523').then(summary => {
//   console.log(summary);
// });

// 

// steam.getUserOwnedGames('76561198258642665').then(res=>console.log(res))

});


client.on('message',message=>{
 // if(message.guild.channel)
 //channel.send(message.guild.channel);
// const channel = message.guild.channels.cache.find(c => c.name === 'bot-commands');
// console.log(channel.name);
   if(message.channel.name ==='bot-commands' && message.content.split(' ')[0][0]!== prefix)
   {
 

    message.delete()
  //.then(msg => message.channel.send(`_Deleted message from ${msg.author.username}`))
  .catch(console.error);
   }
 //console.log(channel.name);
 //console.log(message.content.split(' ')[0][0]);

})

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(c => c.name === 'welcome'); // change this to the channel name you want to send the greeting to
  if (!channel) return;
  channel.send(`Welcome ${member}!`);
});

client.login(token).catch(err=>console.log("valiate token"));
