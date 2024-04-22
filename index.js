const TelegramBot = require("node-telegram-bot-api")
require("dotenv").config()
const express = require("express")
const { getWeatherInfo } = require("./controller/getWeather")

const App = express()
const PORT = process.env.PORT

const TOKEN = process.env.MY_TOKEN || "UR_TELEGRAM_TOKEN"

const Tipe = {
  polling: true,
}
const myBot = new TelegramBot(TOKEN, Tipe)

myBot.on("message", async (msg) => {
  const chatId = msg.chat.id
  const userInput = msg.text

  try {
    const wData = await getWeatherInfo(userInput)
    const msg = `🏢 Kota: ${wData.cityName}\n🌦️ Cuaca: ${
      wData.weather
    }\n🌡️ Suhu: ${wData.temperature.toFixed(2)}°C.\nDetail :\nKelembapan : ${
      wData.humidity
    }%\nTekanan : ${wData.pressure}hPa\nKecepatan Angin: ${wData.windSpeed}m/s.`

    myBot.sendMessage(chatId, msg)
  } catch (error) {
    console.log("cannot find the city", error)
  }
})

App.listen(PORT, (err) => {
  if (err) console.error("ERROR: FAILED TO CONNECT")

  console.log("APP listeing to PORT", PORT)
})
