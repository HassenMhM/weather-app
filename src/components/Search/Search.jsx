/* eslint-disable no-unused-vars */
import *as styles from './Search.css'
import { useState } from 'react'
import { setData } from '../../features/weather/WeatherSlice'
import { store } from '../../app/store'
import { fetchWeatherData } from './data'
import { cities } from './cities'
export const Search=()=>{
    const handleSubmit=()=>{
        const input=document.getElementById('search-input')
        fetchWeatherData(input.value)
    } 
    const citiesFilter=(inputValue)=>{
        return(cities.filter((city)=>city.toLowerCase().startsWith(inputValue.toLowerCase())))
    }
    const handleChange=()=>{
        if(document.getElementById('suggestionsList')!==null){
            document.getElementById('suggestionsList').remove()
        }
        const inputValue=document.getElementById('search-input').value
        if(inputValue.length>=3){
            const searchContainer=document.getElementById("search")
            const suggestionsList=document.createElement('ul')
            suggestionsList.setAttribute('id','suggestionsList')
            for(let i=0;i<=citiesFilter(inputValue).length-1;i++){
                const suggestion=document.createElement('li')
                suggestion.addEventListener('click',handleClick)
                suggestion.innerHTML=citiesFilter(inputValue)[i]
                suggestionsList.appendChild(suggestion)
            }
            searchContainer.appendChild(suggestionsList)
        }
    }
    const handleClick=(e)=>{
        fetchWeatherData(e.currentTarget.innerHTML)
        document.getElementById('search-input').value=e.currentTarget.innerHTML
        document.getElementById('suggestionsList').remove()
    }
    return (
        <>
        <form action="">
            <div className="search" id='search'>
                <input type="text" onChange={handleChange} className="search-input" id='search-input' />
            </div>
        </form>
        </>
    )
}