const { pipeline } = require('@huggingface/inference');

// Query the GPT-Neo model for natural language understanding
async function queryNeoGPT(userQuery) {
  const generator = pipeline('text-generation', { model: 'EleutherAI/gpt-neo-2.7B' });
  
  const response = await generator(userQuery, { max_length: 100 });
  
  return response[0].generated_text;
}

module.exports = { queryNeoGPT };
