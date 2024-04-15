import openai
import os

# Fetch the API key from the environment variables
openai.api_key = os.getenv('OPENAI_API_KEY')

if not openai.api_key:
    raise ValueError("API key is not set. Please set the OPENAI_API_KEY environment variable.")

response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What's the weather like today?"}
    ]
)

print(response['choices'][0]['message']['content'])
