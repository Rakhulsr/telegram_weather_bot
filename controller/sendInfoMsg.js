const { getWeatherInfo } = require("./getWeather.js")

const sendInfoMsg = async (userInput) => {
  const wData = await getWeatherInfo(userInput)

  const msg = `🏢 Kota: ${wData.cityName}\n🌦️ Cuaca: ${
    wData.weather
  }\n🌡️ Suhu: ${wData.temperature.toFixed(2)}°C.\nDetail :\nKelembapan : ${
    wData.humidity
  }%\nTekanan : ${wData.pressure}hPa\nKecepatan Angin: ${wData.windSpeed}m/s.`
  return msg
}

module.exports = { sendInfoMsg }
