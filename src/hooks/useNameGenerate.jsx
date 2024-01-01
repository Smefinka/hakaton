// useImageGeneration.js
import { useState } from 'react'
import axios from 'axios'
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY

const useNameGeneration = () => {
  const [generatedNames, setGeneratedNames] = useState(null)
 
  const generateName = async (prompt) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          "model": "gpt-3.5-turbo",
          "messages": [
            {
              "role": "system",
              "content": "You are a helpful assistant."
            },
            {
              role: 'user',
              content: `${prompt}`,
            },
          ]},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )

      const namesData = response.data.choices[0].message.content || []
      setGeneratedNames(namesData)
    } catch (error) {
      console.error('Error generating image:', error)
    } 
  }

  return { generatedNames, generateName }
}

export default useNameGeneration
