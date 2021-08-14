const axios = require('axios')

module.exports = {
    name: 'getUUIDFromUsername',
    main(passed1, passed2) {
        return new Promise((resolve, reject) => {
            //Values for API Request
            let value1 = passed1
            let value2 = new Date().getTime()

            //Check if types are correct
            if (typeof (passed1) != 'string') {
                //Error
                return Promise.reject(new Error('Expected string got ' + typeof (passed1)));
            } else if (passed2) {
                if (typeof (passed2) != 'object') {
                    //Error
                    return Promise.reject(new Error('Expected (date) object got ' + typeof (passed2)));
                }
            }

            if (passed2) {
                //Get Epoch
                value2 = passed2.getTime() / 1000
            }

            //Changing Variables
            let url = `https://api.mojang.com/users/profiles/minecraft/${value1}?at=${value2}`;

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