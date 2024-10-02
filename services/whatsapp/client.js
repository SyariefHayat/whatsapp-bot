const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

// inisialisasi whatsapp client
const client = new Client({
    authStrategy: new LocalAuth()
});

// event ketika whatsapp bot sudah siap
client.on('ready', () => {
  console.log('Whatsapp Bot is ready!');
})

// event untuk generate Qr code
client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
})

module.exports = client;