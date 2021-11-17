const geocodeAPI = require('./utils/geocode');
const weatherAPI = require('./utils/weather');

const city = process.argv[2];
const country = process.argv[3];

// chacking the city and country..
if (!city || !country) {
    console.log('Please provide city and country name!');
} else {
    // calling geoCodingAPI function..
    // in geocode we passed (city, country, callback function)..
    geocodeAPI(city, country, (err, geocodeData) => {
        if (err) return console.log(err);

        // calling weatherAPI of rapidAPI..
        // in weather we passed (lat, lon, callback function)..
        weatherAPI(geocodeData.lat, geocodeData.lon, (err, weatherData) => {
            if (err) return console.log(err);

            console.log(`${geocodeData.display_name}\n`);

            console.log(`Weather of ${weatherData.city_name} city -- ${weatherData.weather.description} -- Snow ${weatherData.snow}`);
            console.log(`Temperature now ${weatherData.temp}deg celcius -- Rain precipitation ${weatherData.precip}%`);
            console.log(`At : ${weatherData.pod === 'd' ? 'Day' : 'Night'} -- ${weatherData.datetime}\n`);

            console.log(`Licence -> ${geocodeData.licence}\n`);
        });
    });
}
