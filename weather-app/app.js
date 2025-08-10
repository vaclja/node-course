import geocode from './utils/geocode.js';
import forecast from './utils/forecast.js';

geocode('Kravaře ve Slezsku, Česká republika', (error, data)=>{
    console.log('Error', error);
    console.log('Data', data);
});

forecast(49.93317, 18.003372, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
});