import { useSelector } from "react-redux"
import { Cloudy } from "../Icons/Cloudy"
import { CloudyRainy } from "../Icons/CloudyRainy"
import { Rain } from "../Icons/Rain"
import { Sunny } from "../Icons/Sunny"
import { Thunder } from "../Icons/Thunder"
import { Today } from "../Icons/Today"
import *as styles from './Weather.css'
import { WeatherIcons } from "./WeatherIcons"
export const Weather=()=>{
    const weather=useSelector(({weather})=>weather)
    const displayDate=(date)=>{
        let newDate=date ||''
        return(newDate.substring(0,10))
    }
    return(
    <>
    {weather.cityName==undefined&&<></>}
    {weather.cityName!=undefined&&
    <div className="weather-container">
        <div className="top-container">
            <Today/>
            <div className="text">
                <p className="date">{displayDate(weather.day_1)}</p>
                <p className="city">{weather.cityName}</p>
                <p className="temp">Temperature: {weather.temp_1}° C <br/>{weather.weather_1}</p>
            </div>
        </div>
        <div className="bottom-container">
            <div className="box">
                <p className="day">{displayDate(weather.day_2)}</p>
                <WeatherIcons weather={weather.weather_2}/>
                <p className="temp">{weather.temp_2}° C</p>
            </div>
            <div className="box">
                <p className="day">{displayDate(weather.day_3)}</p>
                <WeatherIcons weather={weather.weather_3}/>
                <p className="temp">{weather.temp_3}° C</p>
            </div>
            <div className="box">
                <p className="day">{displayDate(weather.day_4)}</p>
                <WeatherIcons weather={weather.weather_4}/>
                <p className="temp">{weather.temp_4}° C</p>
            </div>
            <div className="box">
                <p className="day">{displayDate(weather.day_5)}</p>
                <WeatherIcons weather={weather.weather_5}/>
                <p className="temp">{weather.temp_5}° C</p>
            </div>
            <div className="box">
                <p className="day">{displayDate(weather.day_6)}</p>
                <WeatherIcons weather={weather.weather_6}/>
                <p className="temp">{weather.temp_6}° C</p>
            </div>
        </div>
    </div>}
    </>
    )
}