import React, { useState } from "react";
import {
  getCurrentWeather,
  getForecastWeather,
} from "../services/weatherApi";

import "../styles/ClimateAnalysis.css";

const ClimateAnalysis = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const handleSearch = async () => {
    if (!city) return;

    const currentData = await getCurrentWeather(city);
    const forecastData = await getForecastWeather(city);

    if (currentData) {
      setWeather(currentData);
    }

    if (forecastData) {
      setForecast(forecastData.list.slice(0, 7));
    }
  };

  return (
    <div className="climate-container">

      <h1 className="title">Climate Dashboard</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={handleSearch}>
          Analyze
        </button>
      </div>

      {weather && (
        <div className="weather-grid">

          <div className="card">
            🌡 Temperature
            <h2>{weather.main.temp} °C</h2>
          </div>

          <div className="card">
            💧 Humidity
            <h2>{weather.main.humidity}%</h2>
          </div>

          <div className="card">
            🌬 Wind Speed
            <h2>{weather.wind.speed} km/h</h2>
          </div>

          <div className="card">
            🌍 Pressure
            <h2>{weather.main.pressure} hPa</h2>
          </div>

          <div className="card">
            ☁ Weather
            <h2>{weather.weather[0].main}</h2>
          </div>

          <div className="card">
            📍 City
            <h2>{weather.name}</h2>
          </div>

        </div>
      )}

      {forecast.length > 0 && (
        <>
          <h2 className="forecast-title">
            7 Day Forecast
          </h2>

          <div className="forecast-container">

            {forecast.map((item, index) => (
              <div className="forecast-card" key={index}>

                <h3>
                  {new Date(item.dt_txt).toLocaleDateString()}
                </h3>

                <p>
                  🌡 {item.main.temp} °C
                </p>

                <p>
                  ☁ {item.weather[0].main}
                </p>

              </div>
            ))}

          </div>
        </>
      )}

    </div>
  );
};

export default ClimateAnalysis;