const client = require('../whatsapp/client');
const { getGeminiResponse } = require('../gemini');
const { Schedule } = require('../../models/index.model');
const { getDayName } = require('../../utils/getDayName');
const { getMenuMessage, getJadwalMessage } = require('../../utils/getMessage');

// event ketika terdapat pesan baru
client.on('message_create', async message => {
  const username = message._data.notifyName || message.from;
  const userMessage = message.body;  

  console.log(`New message from ${username}: ${message.body}`);

  if (userMessage === '/menu') { 
		const menuMsg = getMenuMessage(username)
		client.sendMessage(message.from, menuMsg);

  } else if (userMessage === '/jadwal') {  
    try {
      const today = getDayName(); 

      const data = await Schedule.findOne({ 
        jurusan: 'Informatika',
        semester: 1,
        'schedule.day': today
      });

      if (!data) { 
        client.sendMessage(message.from, 'Jadwal kuliah untuk hari ini belum tersedia');
        return;
      }

      const todaySchedule = data.schedule.find(s => s.day === today) 
      let jadwalMsg = getJadwalMessage(username, today, todaySchedule);

      client.sendMessage(message.from, jadwalMsg);
    } catch (error) {
      console.log(error)
    }
  } else if (userMessage.startsWith('/ask')) {
    const question = userMessage.replace('/ask', '').trim();

    if (question) {
      const geminiResponse = await getGeminiResponse(question)

      client.sendMessage(message.from, geminiResponse);
    } else {
      client.sendMessage(message.from, 'Perintah ini belum dikenali. Silahkan gunakan /ask <pertanyaan> untuk mendapatkan jawaban.');
    }
  } 
});