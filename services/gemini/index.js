require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const { GEMINI_KEY } = process.env;

async function getGeminiResponse(prompt) {
  try {
    const genAI = new GoogleGenerativeAI(GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);

    return result.response.text()
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { getGeminiResponse }