const { getOpenAIResponse } = require('../api/openai');

const processQuery = async (query) => {
    const response = await getOpenAIResponse(query);
    return response;
}

module.exports = { processQuery };