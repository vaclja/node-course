import geocode from './utils/geocode.js';
import forecast from './utils/forecast.js';

let city = process.argv[2];
if(city){
  geocode(city, (error, data)=>{
    if(error){
      return console.log('Error', error);
    }
      forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error){
          return console.log('Error', error);
        }
        console.log(`It's currently ${forecastData.current.temperature} degrees, ${forecastData.current.weather_descriptions[0]} in ${forecastData.location.name}.`);
    });
  });
}


