import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

import { useState, useEffect } from "react";

import {
  getCurrentWeather,
  getForecastWeather,
  getCitySuggestions,
} from "../services/weatherApi";

import "../styles/ClimateAnalysis.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {

  const [city, setCity] = useState("");

  const [weather, setWeather] = useState(null);

  const [forecast, setForecast] = useState([]);

  const [suggestions, setSuggestions] = useState([]);




  // CITY SEARCH

  useEffect(() => {

    const loadSuggestions = async () => {

      if(city.length < 2){

        setSuggestions([]);

        return;
      }

      const data = await getCitySuggestions(city);

      setSuggestions(data || []);

    };

    loadSuggestions();

  }, [city]);




  // ANALYZE WEATHER

  const analyzeWeather = async () => {

    if(!city) return;

    const currentData = await getCurrentWeather(city);

    const forecastData = await getForecastWeather(city);

    if(currentData){

      setWeather(currentData);

    }

    if(forecastData){

      setForecast(forecastData.forecast.forecastday);

    }

    setSuggestions([]);

  };



const getCurrentLocation = () => {

  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(

    async (position) => {

      try {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
        );

        const data = await response.json();
        console.log(data.address);

        const detectedLocation =
          data.address.suburb ||
          data.address.neighbourhood ||
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.state ||
          "";

        setCity(detectedLocation);

      } catch (error) {

        alert("Unable to fetch location");

      }

    },

    () => {

      alert("Location permission denied");

    }

  );

};
  // GRAPH DATA

  const chartData = {

    labels: forecast.map((item)=>
      item.date
    ),

    datasets: [

      {
        label:"Temperature °C",

        data: forecast.map(
          (item)=>item.day.avgtemp_c
        ),

        borderColor:"#38bdf8",

        backgroundColor:"#38bdf8",

        tension:0.4,
      },



      {
        label:"Humidity %",

        data: forecast.map(
          (item)=>item.day.avghumidity
        ),

        borderColor:"#00ff99",

        backgroundColor:"#00ff99",

        tension:0.4,
      },



      {
        label:"Wind km/h",

        data: forecast.map(
          (item)=>item.day.maxwind_kph
        ),

        borderColor:"#ff7300",

        backgroundColor:"#ff7300",

        tension:0.4,
      },

    ],
  };

  return (

    <div className="dashboard">

      <h1 className="dashboard-title">

        Climate Dashboard

      </h1>

      {/* SEARCH */}

      <div className="search-container">

        <div className="search-box">

          <input
            type="text"
            placeholder="Search city..."
            value={city}
            onChange={(e)=>setCity(e.target.value)}
          />
      <span
        className="location-icon"
       onClick={getCurrentLocation}
      >
       📍
      </span>
          {suggestions.length > 0 && (

            <div className="suggestion-box">

              {suggestions.map((item,index)=>(

                <div
                  key={index}
                  className="suggestion-item"
                  onClick={()=>{

                    setCity(item.name);

                    setSuggestions([]);

                  }}
                >

                  {item.name}, {item.country}

                </div>

              ))}

            </div>

          )}

        </div>



        <button onClick={analyzeWeather}>
  Analyze
</button>



      </div>




      {/* WEATHER DATA */}

      {weather && (

        <>

          <div className="weather-container">

            <div className="card">

              <h2>🌡 Temperature</h2>

              <p>{weather.current.temp_c} °C</p>

            </div>



            <div className="card">

              <h2>💧 Humidity</h2>

              <p>{weather.current.humidity}%</p>

            </div>



            <div className="card">

              <h2>🌬 Wind Speed</h2>

              <p>{weather.current.wind_kph} km/h</p>

            </div>



            <div className="card">

              <h2>🌍 Pressure</h2>

              <p>{weather.current.pressure_mb} mb</p>

            </div>



            <div className="card">

              <h2>☁ Weather</h2>

              <p>{weather.current.condition.text}</p>

            </div>



            <div className="card">

              <h2>📍 City</h2>

              <p>{weather.location.name}</p>

            </div>

          </div>




          {/* 7 DAYS FORECAST */}

          <div className="forecast-section">

            <h1 className="forecast-title">

              7 Days Forecast

            </h1>



            <div className="forecast-container">

              {forecast.map((item,index)=>(

                <div
                  className="forecast-card"
                  key={index}
                >

                  <h3>

                    {new Date(item.date).toLocaleDateString(
                      "en-US",
                      {
                        weekday:"long",
                        day:"numeric",
                        month:"short",
                      }
                    )}

                  </h3>



                  <img
                    src={item.day.condition.icon}
                    alt=""
                  />



                  <h2>

                    {item.day.avgtemp_c} °C

                  </h2>



                  <p>

                    {item.day.condition.text}

                  </p>

                </div>

              ))}

            </div>

          </div>




          {/* TREND ANALYSIS */}

          <div className="trend-section">

            <h1 className="trend-title">

              Trend Analysis

            </h1>



            <div className="chart-box">

              <Line data={chartData} />

            </div>

          </div>

        </>

      )}

    </div>

  );
}

export default Dashboard;