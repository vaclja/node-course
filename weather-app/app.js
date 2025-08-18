příimport geocode from './utils/geocode.js';
import forecast from './utils/forecast.js';

let city = process.argv[2];
if(city){
  geocode(city, (error, {latitude, longitude, location})=>{
    if(error){
      return console.log('Error', error);
    }
      forecast(latitude, longitude, (error, forecastData) => {
        if(error){
          return console.log('Error', error);
        }
        console.log(`It's currently ${forecastData.current.temperature} degrees, ${forecastData.current.weather_descriptions[0]} in ${location}.`);
    });
  });
}


