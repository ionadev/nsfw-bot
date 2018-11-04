const { CommandoClient } = require('discord.js-commando')
const path = require('path');
const client = new CommandoClient({
    commandPrefix: 's.',
    owner: ['365644930556755969','346662217510551552'],
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['nsfw', 'NSFW Commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

    client.on('ready', () => {
        console.log('Logged in!');
        client.user.setActivity('and Watching');
    });

    client.login('Your Secret Token');
