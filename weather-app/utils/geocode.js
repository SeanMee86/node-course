const request = require('request');

const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2Vhbm1lZTg2IiwiYSI6ImNrMDZ6emFvbDB4YWMzbmsxcG9wYnV5dGQifQ.3apV4HTjZbPK_MvUDEafKA&limit=1`;
    request({url: url, json: true}, (err, res) => {
        if (err) {
            callback('Unable to connect to location services!', undefined)
        } else if (!res.body.features.length) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0],
                location: res.body.features[0].place_name
            });
        }
    })
};

module.exports = geoCode;