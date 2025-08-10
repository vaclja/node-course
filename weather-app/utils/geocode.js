import request from 'postman-request';

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q='+encodeURIComponent(address)+'&access_token=pk.eyJ1IjoicmV3aXRhYmxlIiwiYSI6ImNtZTYxYTh2dTBheXYyaXNiaXMyOGhpdjQifQ.cBfLG4mo2ho9PS-iClsXSA'
    request({url:url, json:true}, (error, response) =>{
        if(error){
            callback('Unable to connect to web services', undefined);
        }
        else if(response.body.features.length === 0){
            callback('No cities found', undefined);
        }
        else{
            callback(undefined, {
                latitude: response.body.features[0].properties.coordinates.latitude,
                longitude: response.body.features[0].properties.coordinates.longitude,
                location: response.body.features[0].properties.full_address
            })
        }
    })
}

export default geocode;