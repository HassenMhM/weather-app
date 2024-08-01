import { setData } from '../../features/weather/WeatherSlice'
import { store } from '../../app/store'
export function fetchWeatherData(value){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${value.toLowerCase()}&appid=863cdde3f33da3f25a3937332baf05ff&units=metric`)
.then(response=>response.json()).then(json=>{
    const Data={
        day_1:json.list[0].dt_txt,
        temp_1:Math.round(json.list[0].main.temp),
        weather_1:json.list[0].weather[0].main,
        cityName:json.city.name,
        humidite:json.list[0].main.humidity,
        wind:json.list[0].wind.speed,
        day_2:json.list[8].dt_txt,
        temp_2:Math.round(json.list[8].main.temp),
        weather_2:json.list[8].weather[0].main,
        day_3:json.list[16].dt_txt,
        temp_3:Math.round(json.list[16].main.temp),
        weather_3:json.list[16].weather[0].main,
        day_4:json.list[24].dt_txt,
        temp_4:Math.round(json.list[24].main.temp),
        weather_4:json.list[24].weather[0].main,
        day_5:json.list[32].dt_txt,
        temp_5:Math.round(json.list[32].main.temp),
        weather_5:json.list[32].weather[0].main,
        day_6:json.list[39].dt_txt,
        temp_6:Math.round(json.list[39].main.temp),
        weather_6:json.list[39].weather[0].main
        }
        store.dispatch(setData(Data))
    })
}
