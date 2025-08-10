import request from 'postman-request';

const forecast = (latitude, longitude, callback) =>{
    console.log(latitude, longitude);
    let url = `https://api.weatherstack.com/current?access_key=37ca6b91d134611155e9d60a0c0c2d2c&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`;

    request({url:url, json:true}, (error, response)=>{
        if(error){
            callback('Could not reach the weather app server', undefined);
        }
        else if(response.body.error){
            callback(response.body.error.info, undefined);
        }
        else{
            callback(undefined, response.body);
        }
    });
}

export default forecast;