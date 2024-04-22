const TelegramBot = require("node-telegram-bot-api")
require("dotenv").config()
const express = require("express")
const { sendInfoMsg } = require("./controller/sendInfoMsg.js")
// const { commands } = require("./utils/command.js")

const App = express()
const PORT = process.env.PORT
const TOKEN = process.env.MY_TOKEN || "UR_TELEGRAM_TOKEN"
const Tipe = {
  polling: true,
}
const myBot = new TelegramBot(TOKEN, Tipe)

// myBot.setMyCommands(commands)
myBot.on("message", async (msg) => {
  const chatId = msg.chat.id
  const userInput = msg.text
  try {
    const msg = await sendInfoMsg(userInput)
    myBot.sendMessage(chatId, msg)
  } catch (error) {
    console.log("Kota Tidak Ditemukan", error)
  }
})

App.listen(PORT, (err) => {
  if (err) console.error("ERROR: FAILED TO CONNECT")

  console.log("APP listeing to PORT", PORT)
})
