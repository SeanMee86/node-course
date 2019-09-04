const request = require('request');

const url = 'https://api.darksky.net/forecast/1d0d2f715fdf13c5f2bacd423967bd08/37.8267,-122.4233';

request({
    url: url,
    json: true
}, (err, res) => {
    const currentWeather = res.body.currently;
    console.log(`${res.body.daily.data[0].summary} It is currently ${currentWeather.temperature} degrees farenheit out and there is a
      ${currentWeather.precipProbability}% chance of precipitation`);
});