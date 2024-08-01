/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux"
import { Cloudy } from "../Icons/Cloudy"
import { Today } from "../Icons/Today"
import *as styles from './Weather.css'
import { WeatherIcons } from "./WeatherIcons"
import wind from "../../assets/icons/wind.png"
export const Weather=()=>{
    const weather=useSelector(({weather})=>weather)
    const displayDate=(date)=>{
        let newDate=date ||''
        newDate=newDate.substring(0,10)
        const dayDate = new Date(date);
        const dayName = getDayName(dayDate);
        return(dayName)
    }
    function getDayName(date) {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return daysOfWeek[date.getDay()];
    }
    return(
    <>
    {weather.cityName==undefined&&
    <div className="weather-container">
        <div className="top-container">
            <Today/>
            <div className="today-box">
                <div className="text">
                    <p className="date">-/-</p>
                    <p className="city">-/-</p>
                    <p className="temp">-/-° C <br/>-/-</p>
                </div>
                <div>
                    <p>Humidité: -/-% </p>
                    <p>Wind: -/-km/h <img src={wind} alt="" /></p>
                </div> 
            </div>
        </div>
        <div className="bottom-container">
            <div className="box">
                <p className="day">-/-</p>
                <Cloudy/>
                <p className="temp">-/-° C</p>
            </div>
            <div className="box">
                <p className="day">-/-</p>
                <Cloudy/>
                <p className="temp">-/-° C</p>
            </div>
            <div className="box">
                <p className="day">-/-</p>
                <Cloudy/>
                <p className="temp">-/-° C</p>
            </div>
            <div className="box">
                <p className="day">-/-</p>
                <Cloudy/>
                <p className="temp">-/-° C</p>
            </div>
            <div className="box">
                <p className="day">-/-</p>
                <Cloudy/>
                <p className="temp">-/-° C</p>
            </div>
        </div>
    </div>}
    {weather.cityName!=undefined&&
    <div className="weather-container">
        <p className="city">{weather.cityName}</p>
        <p className="date">{displayDate(weather.day_1)}</p>
        <div className="top-container">
            <Today/>
            <div className="today-box">
                <div className="text">
                    <p className="temp">{weather.temp_1}° C </p>
                </div>
                <div>
                    <p>{weather.weather_1}</p>
                    <p>Humidité: {weather.humidite}% </p>
                    <p>Wind: {weather.wind} km/h <img src={wind} alt="" /></p>
                </div> 
            </div>
        </div>
        <div className="bottom-container">
            <div className="box">
                <p className="day">Tomorrow</p>
                <WeatherIcons weather={weather.weather_2}/>
                <p className="tempe">{weather.temp_2}° C</p>
            </div>
            <div className="box">
                <p className="day">{displayDate(weather.day_3)}</p>
                <WeatherIcons weather={weather.weather_3}/>
                <p className="tempe">{weather.temp_3}° C</p>
            </div>
            <div className="box">
                <p className="day">{displayDate(weather.day_4)}</p>
                <WeatherIcons weather={weather.weather_4}/>
                <p className="tempe">{weather.temp_4}° C</p>
            </div>
            <div className="box">
                <p className="day">{displayDate(weather.day_5)}</p>
                <WeatherIcons weather={weather.weather_5}/>
                <p className="tempe">{weather.temp_5}° C</p>
            </div>
            <div className="box">
                <p className="day">{displayDate(weather.day_6)}</p>
                <WeatherIcons weather={weather.weather_6}/>
                <p className="tempe">{weather.temp_6}° C</p>
            </div>
        </div>
    </div>}
    </>
    )
}