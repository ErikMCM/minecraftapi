const request = require('request')

module.exports = {
    name: 'getUUIDFromUsername',
    main(passed1, passed2) {
        //Values for API Request
        let value1 = passed1
        let value2 = ''

        //Check if types are correct
        if (typeof(passed1) != String) {
            //Error
            return Promise.reject(new Error('Expected String got ' + typeof(passed1)));
        } else if (typeof(passed2) != Date) {
            //Error
            return Promise.reject(new Error('Expected Date got ' + typeof(passed2)));
        }

        

        //Changing Variables
        let url = `https://api.mojang.com/users/profiles/minecraft/${value1}?at=${value2}`;

        //Get Request
        request.get(url, function (err, res, body) {
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