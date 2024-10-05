# Telegram Weather Bot

[DEMO](https://t.me/lala_lulu_bot)

## Description

The Telegram Weather Bot is a Telegram bot that provides real-time weather information based on the city name input by the user. This bot uses the OpenWeather API to fetch weather data and is built on Node.js with Express.

## Features

- Accepts city name from users
- Fetches weather data from the OpenWeather API
- Sends real-time weather updates to users
- Offers basic commands like `/start`, `/help`, and `/stop`

## Prerequisites

Before running the bot, ensure that you have the following:

- [Node.js](https://nodejs.org/) version 14 or higher
- [npm](https://www.npmjs.com/) for managing dependencies
- A Telegram bot token (Get it from [BotFather](https://core.telegram.org/bots#botfather))
- OpenWeather API Key (Sign up at [OpenWeather](https://home.openweathermap.org/users/sign_up))

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Rakhulsr/telegram_weather_bot.git
   cd telegram_weather_bot
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure the bot**

   Create a `.env` file in the project directory with the following content:

   ```env
   MY_TOKEN=your_telegram_bot_token
   WEATHER_KEY=your_openweather_api_key
   PORT=3000
   ```

   Replace `your_telegram_bot_token` with your Telegram bot token and `your_openweather_api_key` with your OpenWeather API key. You can also change the `PORT` if necessary.

## Usage

1. **Run the bot**

   To run the bot in development mode with automatic file change monitoring:

   ```bash
   npm run dev
   ```

   To run the bot in production mode:

   ```bash
   npm start
   ```

2. **Interact with the bot**

   - Send a city name to your bot on Telegram.
   - The bot will reply with the current weather information for that city.

   Available commands:

   - `/start` - Prompt to input a city name to get weather information.
   - `/help` - Display usage instructions for the bot.
   - `/stop` - Stop interacting with the bot.

## Project Structure

- `index.js` - Main script that runs the bot
- `controller/sendInfoMsg.js` - Fetches weather data and formats the message
- `utils/command.js` - Defines available commands for the bot
- `package.json` - Contains project dependencies and npm scripts
- `package-lock.json` - Dependency lock file
- `.env` - Configuration file (excluded from version control)
- `README.md` - Project documentation

---
