import { Autocomplete, Button, TextField } from '@mui/material'
import *as styles from './Search.css'
import { useState } from 'react'
import { setData } from '../../features/weather/WeatherSlice'
import { store } from '../../app/store'
export const Search=()=>{
    const [cities, setCities] = useState([])
    fetch(`https://countriesnow.space/api/v0.1/countries`).then(response=>response.json()).then(json=>{
        let citiesArray=json.data[0].cities
        for(let i=1;i<=100;i++){
            citiesArray=citiesArray.concat(json.data[i].cities)
        }
        setCities(citiesArray)
    })
    const handleChange=(e)=>{
        const searchedCity=e.currentTarget.innerHTML
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&appid=863cdde3f33da3f25a3937332baf05ff&units=metric`).then(response=>response.json()).then(json=>{
            const Data={
                day_1:json.list[0].dt_txt,
                temp_1:Math.round(json.list[0].main.temp),
                weather_1:json.list[0].weather[0].main,
                cityName:json.city.name,
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
    return (
        <>
            <Autocomplete clearOnBlur={false} onChange={handleChange} className='search' renderInput={(params)=><TextField {...params} label={'Enter a city ....'}/>}
            options={cities}/>
        </>
    )
}