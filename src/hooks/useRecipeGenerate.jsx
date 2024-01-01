const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
const fetchApi = async (prompt) => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
      format: 'json',
    }),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  console.log('Response data:', data)
  const content = data.choices?.[0]?.message?.content

  if (!content) {
    throw new Error('Invalid response format. Missing content in choices.')
  }

  return content
}

export const generateRecipe = async (ciasto, farsh, sklad) => {
  const prompt = `utworz INGREDIENTS.JSON - stworz różnorodne składniki do pierogów,używając składniki jako podstawę z czego powinien skład się JSON, a same: dough : ${ciasto},filling: ${farsh}, obowiązkowo wpisz quantity jak uważasz lepiej.
  Запиши информацию в формате JSON без добавления лишних слов:
  {
    "ingredients": {
      "dough": [
        { "name": "Mąka", "quantity": "2 szklanki" },
        { "name": "Woda", "quantity": "1 szklanka" },
        { "name": "Płatki owsiane", "quantity": "50g" }
      ],
      "filling": [
        { "name": "ziemniaki", "quantity": "1 kilogram" },
        { "name": "cebula", "quantity": "1 kilogram" },
        { "name": "tuńczyk", "quantity": "100 g" },
        { "name": "Orzechy włoskie", "quantity": "garść" }
      ]
    }
  }

  Пожалуйста, учти следующие замечания:
  - Исключи повторение ингредиентов, представленных в примере.
  - Не добавляй ID: ${Math.floor(Math.random() * 1000)}`

  try {
    const ingredients = await fetchApi(prompt)
    console.log('Ingredients response:', ingredients)
    return JSON.parse(ingredients)
  } catch (error) {
    console.error('Error in generateRecipe:', error)
    throw error
  }
}
