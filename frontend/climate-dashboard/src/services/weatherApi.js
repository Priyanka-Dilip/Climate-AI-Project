import axios from "axios";

const API_KEY = "6340c407ed0f44fa84e112443262805";

const BASE_URL = "https://api.weatherapi.com/v1";



// CURRENT WEATHER

export const getCurrentWeather = async (city) => {

  try {

    const response = await axios.get(

      `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=yes`

    );

    return response.data;

  } catch (error) {

    console.log(error);

    return null;
  }
};



// 7 DAYS FORECAST

export const getForecastWeather = async (city) => {

  try {

    const response = await axios.get(

      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=yes`

    );

    return response.data;

  } catch (error) {

    console.log(error);

    return null;
  }
};



// CITY SEARCH SUGGESTIONS

export const getCitySuggestions = async (text) => {

  try {

    const response = await axios.get(

      `${BASE_URL}/search.json?key=${API_KEY}&q=${text}`

    );

    return response.data;

  } catch (error) {

    console.log(error);

    return [];

  }
};