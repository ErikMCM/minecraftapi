exports.apiStatus = function() {
    require('./functions/util/apiStatus').main()
    .then(data =>{
        Promise.resolve(data);
    })
    .catch(e =>{
        Promise.reject(e)
    });
}

exports.getUsernameFromUUID = function(passed1, passed2) {
    require('./functions/usernames/getUUIDFromUsername.js').main(passed1, passed2)
    .then(data =>{
        Promise.resolve(data);
    })
    .catch(e =>{
        Promise.reject(e)
    });
}
