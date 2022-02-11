require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');
const csvSync = require('csv-parse/lib/sync');
const { checkServerIdentity } = require('tls');

const client = new Discord.Client();
const file = 'response.csv';
const BOT_TOKEN = process.env.BOT_TOKEN;


listCheck = (msg) => {
  console.log("listCheck");
  let val = msg.content;
  for(let i = 0; i < kList.length; i++)
  {
    if(val.includes(kList[i][0]))
    {
      msg.reply(kList[i][1]);
      console.log("res:", kList[i][1]);
      return true;
    }
  }
}

client.on('message', async msg => {
  if (msg.author.bot || !msg.guild) return;
  if (listCheck(msg)) return;
});

client.on('ready', () => {
  console.log(` logon as ${client.user.tag} `)
});

let data = fs.readFileSync(file);
let kList = csvSync(data);
console.log(kList);
client.login(BOT_TOKEN);