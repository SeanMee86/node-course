const request = require('request');
const geoCode = require('./utils/geocode');

// const url = 'https://api.darksky.net/forecast/1d0d2f715fdf13c5f2bacd423967bd08/37.8267,-122.4233';
//
// request({
//     url: url,
//     json: true
// }, (err, res) => {
//   if(err){
//     console.log('Could not connect to Weather Service...')
//   }else if(res.body.error){
//     console.log(res.body.error);
//   }else{
//     const currentWeather = res.body.currently;
//     console.log(`${res.body.daily.data[0].summary} It is currently ${currentWeather.temperature} degrees farenheit out and there is a
//       ${currentWeather.precipProbability}% chance of precipitation`);
//   }
// });

// const geoCodeBaseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
// const location = 'Los Angeles';
// const geoCodeUrl = `${geoCodeBaseUrl}${location}.json?access_token=pk.eyJ1Ijoic2Vhbm1lZTg2IiwiYSI6ImNrMDZ6emFvbDB4YWMzbmsxcG9wYnV5dGQifQ.3apV4HTjZbPK_MvUDEafKA&limit=1`;

// request({
//   url: 'https://api.darksky.net/forecast/1d0d2f715fdf13c5f2bacd423967bd08/34.0544,-118.2439',
//   json: true
// }, (err, res) => {
//   if(err){
//     console.log('Could not connect to Weather Service...')
//   }else if(res.body.error){
//     console.log(res.body.error)
//   }else{
//     const currentWeather = res.body.currently;
//     console.log(`${res.body.daily.data[0].summary} It is currently ${currentWeather.temperature} degrees farenheit out and there is a
//       ${currentWeather.precipProbability}% chance of precipitation`);
//   }
// });

// request({
//   url: geoCodeUrl,
//   json: true
// }, (err, res) => {
//
//   // console.log(`The Longitude of Los Angeles is ${longitude} and the Latitude is ${latitude}`);
//
//   if(err){
//     console.log('could not connect to weather service');
//   }else if(!res.body.features.length){
//     console.log('sorry no matches were found for that search');
//   }else{
//     const latLong = res.body.features[0].center;
//     const latitude = latLong[1];
//     const longitude = latLong[0];
//     console.log(`${latitude}, ${longitude}`);
//   }
// });

geoCode('Seattle', (error, data) => {
  console.log('Error: ', error);
  console.log('Data: ', data);
});