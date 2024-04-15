const openai = require('openai');
const dotenv = require('dotenv');
dotenv.config();

openai.apiKey = process.env.OPENAI_API_KEY;

const getOpenAIResponse = async (prompt) => {
    try {
        const response = await openai.Completion.create({
            model: "text-davinci-002",
            prompt: prompt,
            max_tokens: 150
        });
        return response.choices[0].text.trim();
    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        return null; 
    }
}

module.exports = { getOpenAIResponse };