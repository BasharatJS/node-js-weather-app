const request = require('postman-request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYmFzaGFyYXRtZCIsImEiOiJja3pubTFpbWcyeWc0Mm9vMG5xNXYzNThlIn0.uUj2n7o4mlpgHopitKUgvQ'

    request({ url: url, json: true }, (error, { body }) => {
         if (error) {
           callback('Unable to connect location services', undefined)
        } else if (body.features.length === 0) {
           callback('Unable to find location. Try another search', undefined)
         } else {
             callback(undefined, {
                 latitude: body.features[0].center[1],
                 longitude: body.features[0].center[0],
                 location: body.features[0].place_name
             })
        }

    })

}

module.exports = geocode







//Geocoding: Challange to show latitude and longitude
// const goecodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/india.json?access_token=pk.eyJ1IjoiYmFzaGFyYXRtZCIsImEiOiJja3pubTFpbWcyeWc0Mm9vMG5xNXYzNThlIn0.uUj2n7o4mlpgHopitKUgvQ'

// request({ url: goecodeUrl, json: true }, (error, response) => {
    

//     if (error) {
//         console.log('Unable to connect network')
//     } else if (response.body.features.length === 0) {
//        console.log('Unable to find location. Try another search')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log('Latitude: ', +  latitude + ' Longitidue :' + longitude )
//     }
// })