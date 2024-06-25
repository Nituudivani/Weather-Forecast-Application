import React from 'react'
import '../Home/Home.css';
// react icon
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaCloudSun } from "react-icons/fa";
import { TbSunset2 } from "react-icons/tb";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";




export default function Home(props) {
  return (
    <div>
      
      <div className='main row'>
        <div className='days col-md-2'><label className='innerday'><FaWind />wind speed </label> {props.weatherdata ? <> {props.weatherdata.wind.speed} KMPH</> : <></>}</div>
        <div className='days col-md-2'><label className='innerday'><WiHumidity />Humidity </label>{props.weatherdata ? <> {props.weatherdata.main.humidity} %</> : <></>}</div>
        <div className='days col-md-2'><label className='innerday'><FaCloudSun />Weather </label>{props.weatherdata ? <> {props.weatherdata.weather[0].description}</> : <></>}</div>
        <div className='days col-md-2'><label className='innerday'><TbSunset2 />Feels like </label>{props.weatherdata ? <> {parseInt(props.weatherdata.main.feels_like - 273.15)}°C</> : <></>}</div>
        <div className='days col-md-2'><label className='innerday'><FaTemperatureArrowUp />Temp Max  </label>{props.weatherdata ? <> {parseInt(props.weatherdata.main.temp_max- 273.15)}°C</> : <></>}</div>
        <div className='days col-md-2'><label className='innerday'><FaTemperatureArrowDown />Temp Min </label>{props.weatherdata ? <> {parseInt(props.weatherdata.main.temp_min- 273.15)}°C</> : <></>}</div>

        
      </div>
    </div>
  )
}
