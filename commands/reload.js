const fs = require("fs");
exports.run = (client, message, args) => {
      if (message.author.id !== config.ownerID) return message.channel.send("Sorry, No permission :O");
      try {
    fs.readdir("./commands/", (err, files) => {
        if (err) return console.error(err);
        message.channel.send(`Refreshed \`${files.length}\` commands successfully!`)
        files.forEach(file => {
             delete require.cache[require.resolve(`./${file}`)];
        });
    });
  } catch (err) {
        return;
      }
};