const TelegramBot = require("node-telegram-bot-api")
require("dotenv").config()
const express = require("express")
const { sendInfoMsg } = require("./controller/sendInfoMsg.js")
const { commands } = require("./utils/command.js")

const App = express()
const PORT = process.env.PORT

App.get("/", (req, res) => {
  res.send("GOT!!")
})

const TOKEN = process.env.MY_TOKEN || "UR_TELEGRAM_TOKEN"
const Tipe = {
  polling: true,
}
const myBot = new TelegramBot(TOKEN, Tipe)

myBot.setMyCommands(commands)

myBot.on("message", async (msg) => {
  const chatId = msg.chat.id
  const userInput = msg.text

  if (msg.entities && msg.entities[0].type === "bot_command") {
    const command = userInput.substring(1)
    const matchCmd = commands.find((cmd) => cmd.command === command)
    if (matchCmd) {
      myBot.sendMessage(chatId, `${matchCmd.description}`)
      return
    }
  } else {
    try {
      const msg = await sendInfoMsg(userInput)

      myBot.sendMessage(chatId, msg)
    } catch (error) {
      console.error("Error : Kota tidak ditemukan")
      myBot.sendMessage(chatId, "Kota tidak ditemukan")
    }
  }
})

App.listen(PORT, (err) => {
  if (err) console.error("ERROR: FAILED TO CONNECT")

  console.log("APP listeing to PORT", PORT)
})
