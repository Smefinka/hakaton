// useImageGeneration.js
import { useState } from 'react'
import axios from 'axios'
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY

const useImageGeneration = () => {
  const [generatedImages, setGeneratedImages] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const generateImage = async (prompt) => {
    setIsLoading(true)

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/images/generations',
        {
          model: 'dall-e-3',
          prompt: prompt,
          n: 1,
          size: '1024x1024',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )

      const imagesData = response.data.data[0].url || []
      setGeneratedImages(imagesData)
    } catch (error) {
      console.error('Error generating image:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return { generatedImages, isLoading, generateImage }
}

export default useImageGeneration
