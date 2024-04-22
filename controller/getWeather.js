const axios = require("axios")
require("dotenv").config()
const WEATHER_KEY = process.env.WEATHER_KEY

const getWeatherInfo = async (userInput) => {
  try {
    const api = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${WEATHER_KEY}`
    )

    const data = api.data
    const weather = data.weather[0].description
    const temperature = data.main.temp - 273.15
    const cityName = data.name
    const humidity = data.main.humidity
    const pressure = data.main.pressure
    const windSpeed = data.wind.speed

    return {
      weather,
      temperature,
      cityName,
      humidity,
      pressure,
      windSpeed,
    }
  } catch (error) {
    console.error("ERROR: FETCHING DATAS FROM API")
    throw error
  }
}

module.exports = { getWeatherInfo }
