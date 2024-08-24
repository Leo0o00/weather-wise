const response = {
    "coord": {
        "lon": -94.04,
        "lat": 33.44
    },
    "weather": [
    {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d" //Este icono se puede descargar desde esta url https://openweathermap.org/img/wn/{weather.icon}@2x.png
    }
    ],
    "base": "stations",
    "main": {
        "temp": 313.19, //Temperatura. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
        "feels_like": 319.83, //Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
        "temp_min": 313.19, //Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
        "temp_max": 313.2, // Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
        "pressure": 1012, //Atmospheric pressure on the sea level, hPa
        "humidity": 37, //Humidity, %
        "sea_level": 1012, //Atmospheric pressure on the sea level, hPa
        "grnd_level": 1001 //Atmospheric pressure on the ground level, hPa
    },
    "visibility": 10000, // Visibility(m). The maximum value of the visibility is 10 km
    "wind": {
        "speed": 3.6, //Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
        "deg": 190 //Wind direction, degrees (meteorological)
    },
    "clouds": {
        "all": 0 //Cloudiness, %
    },
    "dt": 1724012274, //Time of data calculation, unix, UTC
    "sys": {
        "type": 1, //Internal parameter
        "id": 6094, //Internal parameter
        "country": "US", //Country code (GB, JP etc.)
        "sunrise": 1723981271, //Sunrise time, unix, UTC
        "sunset": 1724029134 //Sunset time, unix, UTC
    },
    "timezone": -18000, //Shift in seconds from UTC
    "id": 4133367, // City ID.
    "name": "Texarkana", //City name.
    "cod": 200 //Internal parameter
}