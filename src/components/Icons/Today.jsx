import { useSelector } from 'react-redux'
import cloud from '../../assets/icons/cloud.png'
import *as styles from '../Weather/Today.css'
import { WeatherIcons } from '../Weather/WeatherIcons'
export const Today=()=>{    
    const weather=useSelector(({weather})=>weather)
    return( 
        <div className="today-icon">
            <WeatherIcons weather={weather.weather_1}/>
        </div>
    )
}