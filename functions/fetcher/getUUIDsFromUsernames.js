const axios = require('axios')

module.exports = {
    name: 'getUUIDsFromUsernames',
    main(passed1) {
        return new Promise((resolve, reject) => {
            //Check if types are correct
            if (typeof (passed1) != 'object') {
                //Error
                return Promise.reject(new Error('Expected (array) object got ' + typeof (passed1)));
            }

            //Changing Variables
            let url = `https://api.mojang.com/profiles/minecraft`;

            //Get Request
            axios.post(url, passed1)
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