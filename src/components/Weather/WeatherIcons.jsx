import { Cloudy } from "../Icons/Cloudy"
import { CloudyRainy } from "../Icons/CloudyRainy"
import { Rain } from "../Icons/Rain"
import { Sunny } from "../Icons/Sunny"
import { Thunder } from "../Icons/Thunder"
import { Snow } from '../Icons/Snow'

export const WeatherIcons=({weather})=>{
    return(<>
    {weather==='Rain'&&<Rain/>}
    {weather==='Sunny'&&<Sunny/>}
    {weather==='Clouds'&&<Cloudy/>}
    {weather==='CloudsRain'&&<CloudyRainy/>}
    {weather==='Thunderstorm'&&<Thunder/>}
    {weather==='Snow'&&<Snow/>}
    {weather==='Clear'&&<Sunny/>}
    </>)
}