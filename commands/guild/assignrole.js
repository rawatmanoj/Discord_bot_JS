const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class assignRole extends Command {
  constructor(client) {
    super(client, {
      name: 'hello',
      aliases: [],
      memberName: 'assignrole',
      group: 'guild',
      description: 'assign a role to a new member',
      guildOnly: true,
      userPermissions: ['MENTION_EVERYONE'],
     
    });
  }

  run(message) {

        let role = message.member.guild.roles.cache.find(r => r.id == "692015624477737081");
       
        message.member.roles.add(role);
    
        message.channel.send(`Hi ${message.member}, now you can use our gaming channels and mingle with others. Don't be shy to connect with our welcoming community :slight_smile:\nTake this place like your local tavern, a perfect place to simmer down, lay back and brag about those sweet headshots you just got :beers:`);

  }
};
