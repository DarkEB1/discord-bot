const Discord = require('discord.js');
const client = new Discord.Client();

const { token, role, command } = require('./config.json');

client.on("ready", () => {
    console.log(`--> Bot online`);
});
client.on("message", message => {

    if(message.author.bot || message.guild == null) return;

    if(message.content.toLowerCase() == command.toLowerCase()) {

        nickname = message.member.nickname;
        username = message.author.username;
        
        array = [
            (!nickname ? false : nickname.startsWith(`777`)),
            (!nickname ? false : nickname.endsWith(`777`)),
            (!nickname ? false : nickname.startsWith(`⁷⁷⁷`)),
            (!nickname ? false : nickname.endsWith(`⁷⁷⁷`)),
            (!username ? false : username.startsWith(`777`)),
            (!username ? false : username.endsWith(`777`)),
            (!username ? false : username.startsWith(`⁷⁷⁷`)),
            (!username ? false : username.endsWith(`⁷⁷⁷`)),
        ];
        
        if(array.includes(true)) {
            embed = new Discord.MessageEmbed()
                .setColor('DARK_BLUE')
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setDescription(`Role has been assigned!`)
            message.channel.send(embed);
            if(!message.member.roles.cache.has(role)) message.member.roles.add(role).catch(err => {console.log(`MISSING PERMISSIONS TO ADD ROLE`)});
        } else {
            embed = new Discord.MessageEmbed()
                .setColor('DARK_RED')
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setDescription(`Your name does not begin or end with 777.`)
            message.channel.send(embed);
        }
    }
});

client.login(token);