import { useState, useEffect } from 'react'
import axios from 'axios'

const useChatGPT = () => {
const [generatedText, setGeneratedText] = useState('')

async function  generateDoughNew (name) {
    try {
      const response = await axios.post(
        'https://training.nerdbord.io/api/v1/openai/chat/completions',
        {
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            {
              role: 'user',
              content:
                `Zgeneruj 4 randomowe skladniki do ${name.name}. Pisz tylko listę składników`,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              '76b58dd78e72e915710ae859ef0b61a79e072a51ddf96dcb29c7881a621ecdbc',
          },
        }
      )
      const contentData = await response.data.choices[0].message.content;
      console.log(name.name) 
    setGeneratedText(contentData)
    } catch (error) {
      console.error('Error generating :', error)
    }
  }
 

  return { generatedText, generateDoughNew};
}


export default useChatGPT
