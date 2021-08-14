const fs = require('fs')
let files = fs.readdirSync(__dirname + '/functions').filter(file => file.endsWith('.js'));

module.exports = {
    auth : {},
    util : {}
}

for (const file of files) {
    let command = require(`./functions/${file}`);
    module.exports[command.name] = command.main
};

files = fs.readdirSync(__dirname + '/functions/util').filter(file => file.endsWith('.js'));

for (const file of files) {
    let command = require(`./functions/util/${file}`);
    module.exports.util[command.name] = command.main
};

files = fs.readdirSync(__dirname + '/functions/auth').filter(file => file.endsWith('.js'));

for (const file of files) {
    let command = require(`./functions/auth/${file}`);
    module.exports.auth[command.name] = command.main
}
