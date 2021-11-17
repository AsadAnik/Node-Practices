// axios for requesting http..
const axios = require('axios');

/** 
 * Weather API from RapidAPI service..
 * which is alternative of darksky.net/dev API..
 **/

const weatherAPI = (lat, lon, callBack) => {
    const weatherAPIOptions = {
        method: 'GET',
        // minutely..
        // url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely',
        // currently..
        url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
        params: { lat: lat, lon: lon, units: 'M', lang: 'en' },
        headers: {
            'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
            'x-rapidapi-key': '1ddd6011f0msh87ef6a80c649f87p1d7618jsn368ecf7beebc'
        }
    };

    // make request here..
    axios.request(weatherAPIOptions).then(function (response) {
        const { weather, city_name, precip, temp, snow, pod, datetime } = response.data.data[0];

        // console.log(response.data);

        // console.log(`Weather of ${city_name} city -- ${weather.description} -- Snow ${snow}`);
        // console.log(`Temperature now ${temp}deg celcius -- Rain precipitation ${precip}%`);
        // console.log(`At : ${pod === 'd' ? 'Day' : 'Night'} -- ${datetime}\n`);
        
        callBack(null, {weather, city_name, precip, temp, snow, pod, datetime});

    }).catch(function (error) {
        // console.log(error.message);
        callBack(error.message, null);
    });
};

module.exports = weatherAPI;