const axios = require('axios')

module.exports = {
    name: 'authenticate',
    main(game, version, username, password) {
        return new Promise((resolve, reject) => {
            //Check if types are correct
            if (typeof (game) != 'string') {
                //Error
                return Promise.reject(new Error('Expected string got ' + typeof (game)));
            } else if (typeof (username) != 'string') {
                //Error
                return Promise.reject(new Error('Expected string got ' + typeof (username)));
            } else if (typeof (password) != 'string') {
                //Error
                return Promise.reject(new Error('Expected string got ' + typeof (password)));
            } else if (typeof (version) != 'int') {
                return Promise.reject(new Error('Expected int got ' + typeof (version)));
            }

            //Changing Variables
            let url = `https://api.mojang.com/profiles/minecraft`;

            //Get Request
            axios.post(url, )
                .then(res => {
                    //Convert body to object
                    let object = JSON.parse(JSON.stringify(res.data));

                    //Resolve
                    return resolve(object);
                })
                .catch(err => {
                    //Error Handle
                    return reject(new Error('There was an error connecting to the API Endpoint (' + url + ')\n\nDebug:\n' + err));
                })
        })
    }
}