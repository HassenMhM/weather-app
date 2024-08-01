import { createSlice } from "@reduxjs/toolkit"

const initialState={
    day_1:undefined,
    temp_1:undefined,
    weather_1:undefined,
    cityName:undefined,
    humidite:undefined,
    wind:undefined,
    day_2:undefined,
    temp_2:undefined,
    weather_2:undefined,
    day_3:undefined,
    temp_3:undefined,
    weather_3:undefined,
    day_4:undefined,
    temp_4:undefined,
    weather_4:undefined,
    day_5:undefined,
    temp_5:undefined,
    weather_5:undefined,
    day_6:undefined,
    temp_6:undefined,
    weather_6:undefined,
}
export const WeatherSlice=createSlice({
    name:'weather',
    initialState,
    reducers:{
        setData:(state,action)=>{
            state.day_1=action.payload.day_1
            state.temp_1=action.payload.temp_1
            state.weather_1=action.payload.weather_1
            state.cityName=action.payload.cityName
            state.humidite=action.payload.humidite
            state.wind=action.payload.wind
            state.day_2=action.payload.day_2
            state.temp_2=action.payload.temp_2
            state.weather_2=action.payload.weather_2
            state.day_3=action.payload.day_3
            state.temp_3=action.payload.temp_3
            state.weather_3=action.payload.weather_3
            state.day_4=action.payload.day_4
            state.temp_4=action.payload.temp_4
            state.weather_4=action.payload.weather_4
            state.day_5=action.payload.day_5
            state.temp_5=action.payload.temp_5
            state.weather_5=action.payload.weather_5
            state.day_6=action.payload.day_6
            state.temp_6=action.payload.temp_6
            state.weather_6=action.payload.weather_6
        }
    }
})
export const {setData}=WeatherSlice.actions
export default WeatherSlice.reducer