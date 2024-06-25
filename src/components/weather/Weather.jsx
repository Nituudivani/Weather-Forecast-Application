import React, { useState } from "react";
import "../weather/Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
// react icon
import { FaTemperatureLow } from "react-icons/fa";
import Home from "../Home/Home";

export default function Weather() {
  const [weatherdata, setWeatherData] = useState("");
  const [city, setCity] = useState("");
  const [search, setSearch] = useState(true);
  const man = () => {
    console.log(city);
    setSearch(false);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c3baa906746826bafd2b5f776b3abc33`
      )
      .then((res) => {
        console.log(res.data);
        setWeatherData(res.data);
      })
      .catch((error) => {
        console.log(error);
        setWeatherData('');
      });
  };

  return (
    <div>
      <div className="container">
        <header>
          <h1>Weather Forecast</h1>
        </header>
        <main>
          <div className="search-bar">
            <input
              type="text"
              id="search"
              placeholder="Enter city name"
              aria-label="Search city"
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={() => man()}>Search</button>
          </div>
          <div id="weather-result" className="weather-result"></div>
        </main>
      </div>
      
      <div className="sun">
      {weatherdata ? (<>
        <label className="head">
        
          <span className="city">CityName</span>
           <span className="Day">{weatherdata.name}</span> 
        </label>
        <div className="weather">
          <label className="celcious">
            Temprature <br />
            <FaTemperatureLow />
            <br />
            {parseInt(weatherdata.main.temp-273.15)}°C
           
          </label>
        </div> </>) : ( search ? <h2>Please Enter City Name...</h2> : <h2> City not found</h2> ) }
        
         
      </div>
      {weatherdata ? 
      <Home weatherdata={weatherdata}/> : <></>}
    </div>
  );
}
