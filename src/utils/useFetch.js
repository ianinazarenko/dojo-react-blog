import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  console.log('fetch data', 'data:', data)

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null) // no update was null
        setIsLoading(true) // update was false
        const response = await fetch(url)
        if (!response.ok) throw new Error('Could not fetch from this resourse')
        const data = await response.json()
        setData(data) // update cause array always is a new reference to memory
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false) // update was true
      }
    }

    fetchData()
  }, []) // if state or props url will be updated useEffect will run again
  // it doesn't work if url is not a state (or props) variable

  return { data, isLoading, error }
}

export default useFetch
