const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = class coronastats extends Command {
  constructor(client) {
    super(client, {
      name: 'coronastats',
      aliases: ['covid19-stats'],
      memberName: 'coronastats',
      group: 'other',
      description: 'Show stats for Corona',
      guildOnly: false
    });
     

  }

  async run(message) {

    console.log("manoj");

    const state={
        totalcases:null,
        recovered:null,
        activeCases:null,
        criticalCases:null,
        totalDeaths:null,
        newDeaths:null
    }

    axios({
        "method":"GET",
        "url":"https://covid-193.p.rapidapi.com/statistics",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-193.p.rapidapi.com",
        "x-rapidapi-key":"e3bd6ad7d0mshf24c4ec77410316p10251cjsnd55ef7632bde"
        },"params":{
        "country":"all"
        }
        })
        .then((response)=>{
          //console.log(response.data.response[0].cases.total)
           state.totalcases=response.data.response[0].cases.total;
           state.recovered=response.data.response[0].cases.recovered;
           state.activeCases=response.data.response[0].cases.active,
           state.criticalCases=response.data.response[0].cases.critical,
           state.totalDeaths=response.data.response[0].deaths.total,
           state.newDeaths=response.data.response[0].deaths.new
          // console.log(state.totalcases);
          // message.channel.send(state.totalcases);
          const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('COVID-19 INFO')
            .setURL('https://discord.js.org/')
            .setAuthor('COVID_19', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription('Coronavirus disease (COVID-19) is an infectious disease caused by a new virus. Coronavirus disease spreads primarily through contact with an infected person when they cough or sneeze. It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth.')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addFields(
              { name: 'Total Cases', value: `${state.totalcases}`, inline: true },
              { name: 'Recovered', value:`${state.recovered}`, inline: true },
              { name: 'Active Cases', value: `${state.activeCases}`,  inline: true },
              { name: 'Critical Cases', value: `${state.criticalCases}`, inline: true },
              { name: 'Total Deaths', value: `${state.totalDeaths}`, inline: true },
              { name: 'New Deaths', value:`${state.newDeaths}`, inline: true },


            )
            
            //.setImage('https://i.imgur.com/wSTFkRM.png')
            .setImage('https://imgur.com/A47sBjE.png')
            .setTimestamp()
            .setFooter('change in plans (Prateek chakka hai)', 'https://i.imgur.com/wSTFkRM.png');

          message.channel.send(exampleEmbed);

        })
        .catch((error)=>{
          console.log(error)
        })
        //message.channel.send(state.totalcases);
    
   
  }
};
