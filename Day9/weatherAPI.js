/*
CHALLENGE 3: Weather Terminal App
​
If you have a favourite weather API in mind already, feel free to use that. If not, use MetaWeather.
https://www.metaweather.com/api/
This app should be able to ask for the a location from the user, and show some weather data about that location. 
​
You need to show this data:
    - current temperature
    - minimum temperature
    - maximum temperature
    - weather state (eg. "cloudy")
    - sunrise time
    - sunset time
    - timezone
​
    (If you're using a different weather API and it doesn't show all of those data points, tough luck. We NEED this data!)
​
    Some of these APIs are kinda weird. MetaWeather in particular only gets weather data about locations by a location ID.
    So you have to figure out how to get a location ID, and THEN get the weather data. 
	
*/
const fetch = require("node-fetch");

var locationCode = 1105779;

console.log("What area would you like the weather of?");
const location = process.stdin.setEncoding("utf-8");
location.on("data", (entry)=> {
    locationCode = weatherData(entry);
    setTimeout(function() {
        console.log(`location Code is ${locationCode} ----------------------`);
    }, 3000);
    return specificLocation(locationCode);
})

function weatherData(entry) {
    fetch(`https://www.metaweather.com/api/location/search/?query=${entry}`)
        .then(dataNeeded => dataNeeded.json())
        .then(locationNum => locationNum[0].woeid)
        .catch(err => console.log(err));
}

function specificLocation(locationCode) {
    console.log(`locationCode in specific location is ------- ${locationCode} -------`);
    fetch(`https://www.metaweather.com/api/location/${locationCode}`)
        .then(locationData => locationData.json())
        .then(locationTemp => {
            console.log(`The current temperature is ${Math.round(locationTemp.consolidated_weather[0].the_temp)}C`);
            console.log(`The minimum temperature is ${Math.round(locationTemp.consolidated_weather[0].min_temp)}C`);
            console.log(`The maximum temperature is ${Math.round(locationTemp.consolidated_weather[0].max_temp)}C`);
            console.log(`The state of the weather is ${locationTemp.consolidated_weather[0].weather_state_name}`);
            console.log(`Sunrise is at ${locationTemp.sun_rise.slice(11, 16)}`);
            console.log(`Sunset is at ${locationTemp.sun_set.slice(11, 16)}`);
            console.log(`And we are in ${locationTemp.timezone} timezone`);
        })
        .catch(err => console.log(err));
}

// specificLocation(1105779);