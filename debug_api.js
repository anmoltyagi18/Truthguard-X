const axios = require('axios');
require('dotenv').config();

const key = process.env.OPENROUTER_API_KEY;

if (!key) {
  console.error('ERROR: OPENROUTER_API_KEY not found in environment variables');
  process.exit(1);
}

async function check() {
  console.log('Testing google/gemini-2.0-flash-exp (should be free)...');
  try {
     const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'google/gemini-2.0-flash-exp:free',
        messages: [{ role: 'user', content: 'Hi' }],
      },
      {
        headers: { 'Authorization': `Bearer ${key}` },
        timeout: 10000
      }
    );
    console.log('Gemini 2.0 Success!');
  } catch (e) {
    console.log('Gemini 2.0 Fail: ' + (e.response?.data?.error?.message || e.message));
  }

  console.log('\nTesting a paid model (openai/gpt-3.5-turbo)...');
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Hi' }],
      },
      {
        headers: { 'Authorization': `Bearer ${key}` },
        timeout: 10000
      }
    );
    console.log('Paid Model Success!');
  } catch (e) {
    console.log('Paid Model Fail: ' + (e.response?.data?.error?.message || e.message));
  }
}

check();
