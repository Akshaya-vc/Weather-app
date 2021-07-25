
const request = require ( 'request');



const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYWtzaGF5YTd2YyIsImEiOiJja3JhcWk3anUxanoxMnhscDZkcW53Nzd0In0.AYAzIudQNO6ZD7wigHD9HQ&limit=1'
    request({url : url, json : true}, (error, response) => {
        if(error){
            callback('Unable to connect', undefined)
        }
        else if(response.body.features.length===0){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, {
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name
            })
        }
    })
}



module.exports = geocode;