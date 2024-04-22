const { getWeatherInfo } = require("../controller/getWeather.js")

const commands = [
  { command: "start", description: "Masukan Nama Kota:" },
  {
    command: "help",
    description:
      "Hi, selamat datang di Info Cuaca_RsR.\nUntuk melihat info cuaca masukan perintah /start.\nUntuk berhenti masukan perintah /stop",
  },
  { command: "stop", description: "Bot Berhenti.\nMasukan /start untuk mulai" },
]

// const commandMsg = () => {

// }

module.exports = { commands }
