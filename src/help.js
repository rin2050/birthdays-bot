const Discord = require('discord.js');
const { Client, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent,] });

client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix)) return

    const [command, ...args] = message.content.slice(prefix.length).split(/\s+/)
    try {

  if (command === 'help') {
        const help1 = new EmbedBuilder()
        .setTitle(`Page(1/3)`)
        .setDescription(`------------------------------\nこのbotの基本的なコマンドを表示します\nコマンドは、[設定したprefix + コマンド名] で動作します\n------------------------------`)
        .setColor('#546e7a')
        .setFields(
          { name: '**`omikuji`**', value: `おみくじをします` },
          { name: '**`random [選択肢1] [選択肢2] ・ ・ ・`**', value: `抽選を行います` },
          { name: '**`server`**', value: `サーバーの招待リンクを表示します` },
          { name: '**`help-{PageID}`**', value: `指定したページID(例: 2)のhelpを表示します` },
          { name: '**次のページを表示する**', value: '`help-2`' },
        )
        message.channel.send({ embeds: [help1] });
    }
        
    } catch (error) {
      const channel = await client.channels.fetch('1457044288784568473')
  
      channel.send({ content: `<@592257486522810409> エラーが発生しました。\n\n${error}` });
    }
});
