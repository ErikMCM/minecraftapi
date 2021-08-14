const fs = require('fs')

//Get all folders in dir
let managerExports = []
let folders = fs.readdirSync(__dirname + '/functions')

//Import folders to our exports and put them in a different array
for (let i = 0; i < folders.length; i++) {
    managerExports.push(folders[i])

    module.exports[folders[i]] = {}
}

//Import functions in managers to their respective function directories
for (let i = 0; i < managerExports.length; i++) {
    let files = fs.readdirSync(__dirname + '/functions/' + managerExports[i]).filter(file => file.endsWith('.js'));

    for (const file of files) {
        let cFunction = require(`./functions/${managerExports[i]}/${file}`);
        
        let base = module.exports[managerExports[i]]
        base[cFunction.name] = cFunction.main
    };
}
