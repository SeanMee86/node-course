const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geoCode('Los Angeles', (error, data) => {
  console.log('Error: ', error);
  console.log('Data: ', data);
});

forecast(34.0544, -118.2439, (error, data) => {
  if (error){
      console.log('Error: ', error);
  }else {
      console.log('Data: ', data);
  }
});