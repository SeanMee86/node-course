const request = require('request');

const forecast = (latitude, longitude , callback) => {
    const url = `https://api.darksky.net/forecast/1d0d2f715fdf13c5f2bacd423967bd08/${latitude},${longitude}`;
    request({
        url,
        json: true
    }, (err, { body }) => {
        const summary = body.daily.data[0].summary;
        const temp = body.currently.temperature;
        const precipChance = body.currently.precipProbability;
        const forecastData = `${summary} It is currently ${temp} degrees farenheit out and there is a ${precipChance}% chance of precipitation`;
        if(err) {
            callback('Unable to connect to weather service', undefined);
        } else if(body.error){
            callback('sorry, no results found', undefined);
        }else {
            callback(undefined, forecastData);
        }
    })
};

module.exports = forecast;