const request = require('request')

module.exports = {
    name: 'apiStatus',
    main() {
        //Changing Variables
        let url = 'https://status.mojang.com/check';

        //Get Request
        request.get(url, function (err, res, body) {
            console.log('done')
            if (err) {
                //Error Handle
                return Promise.reject(new Error('There was an error connecting to the API Endpoint (' + url + ')\n\nDebug:\n' + err));
            } else {
                //Convert body to object
                let object = JSON.parse(body);

                //Resolve
                return Promise.resolve(object);
            }
        })
    }
}