const request = require('request');

const forecast = (latitude, longitude , callback) => {
    const url = `https://api.darksky.net/forecast/1d0d2f715fdf13c5f2bacd423967bd08/${latitude},${longitude}`;
    request({
        url: url,
        json: true
    }, (err, res) => {
        if(err) {
            callback('Unable to connect to weather service', undefined);
        } else if(res.body.error){
            callback('sorry, no results found', undefined);
        }else {
            const currentWeather = res.body.currently;
            callback(undefined, `${res.body.daily.data[0].summary} It is currently ${currentWeather.temperature} degrees farenheit out and there is a ${currentWeather.precipProbability}% chance of precipitation`);
        }
    })
};

module.exports = forecast;