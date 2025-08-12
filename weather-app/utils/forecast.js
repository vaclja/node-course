import request from 'postman-request';

const forecast = (latitude, longitude, callback) =>{
    let url = `https://api.weatherstack.com/current?access_key=37ca6b91d134611155e9d60a0c0c2d2c&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`;

    request({url, json:true}, (error, {body})=>{
        if(error){
            callback('Could not reach the weather app server', undefined);
        }
        else if(body.error){
            callback(errorInfo, undefined);
        }
        else{
            callback(undefined, body);
        }
    });
}

export default forecast;