const fs = require('fs')

//Get all folders in dir
let managerExports = []
let folders = fs.readdirSync(__dirname + '/functions')

//Import folders to our exports and put them in a different array
for (let i = 0; i < folders.length; i++) {
    managerExports.push(folders[i])

    //We need to make user interractable classes part of main
    if (!folders[i].toString() == "classes") { 
        //This crazy code works only this way some how, if you can explain why it works only like this i'd appreciate it
    } else {
        module.exports[folders[i]] = {}
    }
}

//Import functions in managers to their respective function directories
for (let i = 0; i < managerExports.length; i++) {
    //Grab our files in the current directory
    let files = fs.readdirSync(__dirname + '/functions/' + managerExports[i]).filter(file => file.endsWith('.js'));
    

    for (const file of files) {
        //Get current file we're working with
        let cFunction = require(`./functions/${managerExports[i]}/${file}`);

        if (managerExports[i].toString() == "classes") { //If this is a class that needs to be apart of the main exports
            //Assign
            module.exports[cFunction.name] = cFunction[cFunction.name]
        } else { //This is a function in a subfolder
            //Assign
            let base = module.exports[managerExports[i]]
            base[cFunction.name] = cFunction.main
        }
    };
}
