const axios = require('axios')

module.exports = {
    name: 'apiStatus',
    main() {
        return new Promise((resolve, reject) => {
            //Changing Variables
            let url = 'https://status.mojang.com/check';

            //Get Request
            axios.get(url)
            .then(res =>{
                //Convert body to object
                let object = JSON.parse(JSON.stringify(res.data));

                //Resolve
                return resolve(object);
            })
            .catch(err =>{
                //Error Handle
                return reject(new Error('There was an error connecting to the API Endpoint (' + url + ')\n\nDebug:\n' + err));
            })
        })
    }
}