const request = require ( 'request');

const weather = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=09da839ac19d816e127f78748d833602&query=' + latitude + ',' + longitude;

    request({url : url, json : true}, (error, response) => {
        if(error){
            callback('Unable to connect', undefined)
        }
        else if(response.body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, {
                location: response.body.location.name+', '+response.body.location.region+', '+response.body.location.country,
                description: response.body.current.weather_descriptions[0],
                temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike
            })
        }
    })
}



module.exports = weather;