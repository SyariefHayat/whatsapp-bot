require('dotenv').config();
const { OpenAI } = require('openai')

const { OPENAI_KEY } = process.env;

// inisialisasi OpenAI
const openai = new OpenAI({
  apiKey: OPENAI_KEY,
})

async function getChatGPTResponse(userMessage) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content: userMessage,
        max_tokens: 300
      }]
    })

    return response.data.choices[0].message.content;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getChatGPTResponse };