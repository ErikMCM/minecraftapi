const axios = require('axios')

module.exports = {
    name: 'getStatistics',
    main(passed1) {
        return new Promise((resolve, reject) => {
            let optionsArr = ["item_sold_minecraft", "prepaid_card_redeemed_minecraft", "item_sold_cobalt", "item_sold_scrolls", "prepaid_card_redeemed_cobalt", "item_sold_dungeons"]

            //Check if types are correct
            if (!typeof (passed1) == 'string') {
                //Error
                return Promise.reject(new Error('Expected string got ' + typeof (passed1)));
            } else {
                //1 Option
                if (typeof (passed1) == 'string') {
                    //If can't find
                    if (!optionsArr.find(s => s == passed1)) {
                        //Error
                        return Promise.reject(new Error('Invalid Option'));
                    }
                }
            }

            //Changing Variables
            let url = `https://api.mojang.com/orders/statistics`;

            //Get Request
            axios.post(url, {metricKeys : passed1})
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