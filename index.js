require('http').createServer((req, res) => res.end('Hola')).listen();

const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767});
const mySecret = process.env['token']

client.on("ready", () => {
    console.log("Estoy listo!");
    client.application.commands.set([
    {
      name: 'ping',
      description: 'pong',
      options: []
    }
  ])
});

client.on('interactionCreate', (int) => {
  if (int.isCommand() && int.commandName === 'ping'){
    int.reply('Pong!')
  } 
})




 
 client.login(mySecret);