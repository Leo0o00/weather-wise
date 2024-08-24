import WeatherData from "@/interfaces/weather";

//Esta funcion transforma la descripcion del tiempo para que cada palabra comience con mayusculas
function modifyWeatherDescription(weatherData: WeatherData){
    let descriptionByWords: string[] = weatherData.weather[0].description.split(" ");

    for (let i = 0; i < descriptionByWords.length; i++){
        descriptionByWords[i] = descriptionByWords[i].charAt(0).toUpperCase() + descriptionByWords[i].slice(1);
    }
    weatherData.weather[0].description = descriptionByWords.join(" ");
}
export default modifyWeatherDescription;