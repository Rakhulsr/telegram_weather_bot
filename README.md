# Telegram Weather Bot

## Deskripsi

Telegram Weather Bot adalah bot Telegram yang memberikan informasi cuaca terkini berdasarkan nama kota yang dimasukkan oleh pengguna. Bot ini menggunakan API OpenWeather untuk mendapatkan data cuaca dan berjalan di atas Node.js dengan Express.

## Fitur

- Menerima nama kota dari pengguna
- Mengambil data cuaca dari OpenWeather API
- Mengirimkan informasi cuaca terkini ke pengguna
- Menyediakan beberapa perintah dasar seperti `/start`, `/help`, dan `/stop`

## Prasyarat

Sebelum menjalankan bot, pastikan Anda telah memenuhi prasyarat berikut:

- [Node.js](https://nodejs.org/) versi 14 atau yang lebih baru
- [npm](https://www.npmjs.com/) untuk mengelola dependensi
- Token bot Telegram (dapatkan dari [BotFather](https://core.telegram.org/bots#botfather))
- API Key OpenWeather (daftar di [OpenWeather](https://home.openweathermap.org/users/sign_up))

## Instalasi

1. **Clone repositori**

   ```bash
   git clone https://github.com/Rakhulsr/telegram_weather_bot.git
   cd telegram_weather_bot
   ```

2. **Instal dependensi**

   ```bash
   npm install
   ```

3. **Konfigurasi**

   Buat file `.env` di direktori proyek dan tambahkan konfigurasi berikut:

   ```env
   MY_TOKEN=your_telegram_bot_token
   WEATHER_KEY=your_openweather_api_key
   PORT=3000
   ```

   Gantilah `your_telegram_bot_token` dan `your_openweather_api_key` dengan token bot Telegram dan API key OpenWeather Anda. Anda dapat mengganti port jika diperlukan.

## Penggunaan

1. **Jalankan bot**

   Untuk menjalankan bot dalam mode pengembangan dengan pemantauan perubahan otomatis, gunakan:

   ```bash
   npm run dev
   ```

   Untuk menjalankan bot dalam mode produksi, gunakan:

   ```bash
   npm start
   ```

2. **Berinteraksi dengan bot**

   - Kirimkan nama kota ke bot Anda di Telegram.
   - Bot akan mengirimkan informasi cuaca terkini untuk kota yang diminta.

   Beberapa perintah yang tersedia:

   - `/start` - Masukkan nama kota untuk mendapatkan informasi cuaca.
   - `/help` - Menampilkan panduan penggunaan bot.
   - `/stop` - Menyetop interaksi dengan bot.

## Struktur Proyek

- `index.js` - Script utama yang menjalankan bot
- `controller/sendInfoMsg.js` - Mengambil informasi cuaca dan mengformat pesan
- `utils/command.js` - Menyediakan perintah-perintah yang tersedia untuk bot
- `package.json` - Daftar dependensi dan skrip npm
- `package-lock.json` - Kunci dependensi proyek
- `.env` - File konfigurasi (tidak termasuk dalam repositori)
- `README.md` - Dokumentasi proyek

