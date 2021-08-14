const axios = require('axios')

module.exports = {
    name: 'getNameHistoryFromUUID',
    main(passed1) {
        return new Promise((resolve, reject) => {
            //Check if types are correct
            if (typeof (passed1) != 'string') {
                //Error
                return Promise.reject(new Error('Expected string got ' + typeof (passed1)));
            }

            //Changing Variables
            let url = `https://api.mojang.com/user/profiles/${passed1}/names`;

            //Get Request
            axios.get(url)
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