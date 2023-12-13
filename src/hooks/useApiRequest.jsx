import { useState, useEffect } from 'react'

const useApiRequest = (url, method = 'GET', data = null) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)

        const requestOptions = {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
        }

        if (data) {
          requestOptions.body = JSON.stringify(data)
        }

        const apiResponse = await fetch(url, requestOptions)
        const responseData = await apiResponse.json()

        setResponse(responseData)
        setError(null)
      } catch (error) {
        setResponse(null)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url, method, data])

  return { response, error, isLoading }
}

export default useApiRequest
