const { getWeatherInfo } = require("./getWeather.js");

const sendInfoMsg = async (userInput) => {
  const wData = await getWeatherInfo(userInput);

  const msg = `🏢 City: ${wData.cityName}\n🌦️ Weather: ${
    wData.weather
  }\n🌡️ Temperature: ${wData.temperature.toFixed(2)}°C.\nDetail :\nHumidity : ${
    wData.humidity
  }%\nPressure : ${wData.pressure}hPa\nWind Speed: ${wData.windSpeed}m/s.`;
  return msg;
};

module.exports = { sendInfoMsg };
