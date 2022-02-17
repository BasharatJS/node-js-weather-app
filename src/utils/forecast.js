const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=57c61ef9f8639faeb749c7d8b932a71f&query=37.8267,-122.4233'

    request({ url: url, json: true }, (error, { body }) => {
         if (error) {
           callback('Unable to connect weather services', undefined)
        } else if (body.error) {
           callback('Unable to find location. Try another search', undefined)
         } else {
             callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like  " + body.current.feelslike + " degrees out")
        }

    })
 }

module.exports = forecast








// const url = 'http://api.weatherstack.com/current?access_key=57c61ef9f8639faeb749c7d8b932a71f&query=New%20York';

// request({ url: url, json: true }, (error, response) => {
//     // const data = JSON.parse(response.body)
//     // console.log(data.current)
//     // console.log(response.body.current)       // when json: true
    
    
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like  " + response.body.current.feelslike + " degrees out")
//     }

// })









// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

