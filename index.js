require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const client = require('./services/whatsapp/client');
require('./services/whatsapp/handlers');
const routes = require('./routes/index.route');

// destructuring 
const { API_PORT, MONGO_URL } = process.env;

// inisialisasi
const app = express();
const PORT = API_PORT || 3000;

// middleware
app.use(express.json());

// database connection
mongoose.connect(MONGO_URL);

// event listener untuk mengecek status koneksi MongoDB
const db = mongoose.connection;

// jika koneksi error
db.on('error', (error) => {
  console.error('Failed to connect to MongoDB:', error);
});

// jika koneksi berhasil
db.once('open', () => {
  console.log('Successfully connected to MongoDB');
});

app.use(routes);

// start server
app.listen(PORT, () => {
  client.initialize();
  console.log(`Server is running on port http://localhost:${PORT}`);
});