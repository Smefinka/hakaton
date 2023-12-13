import axios from 'axios'
async function  generateDough (name) {
    try {
      const response = await axios.post(
        'https://training.nerdbord.io/api/v1/openai/chat/completions',
        {
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            {
              role: 'user',
              content:
                `Zgeneruj 4 randomowe skladniki do ${name}. Pisz tylko listę składników`,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
            
              'ccdbc6d22ae9520cf81c0f812abb6ed95055717f247604cc855fa9acaae05ccb',
          },
        }
      )
let results =  await response.data.choices[0].message.content;

return results;


   
    } catch (error) {
      console.error('Error generating :', error)
    }

  }
 

  export default generateDough;