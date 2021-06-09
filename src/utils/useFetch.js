import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // console.log('fetch data', 'data:', data)

  useEffect(() => {
    const stopFetch = new AbortController()
    setTimeout(async () => {
      try {
        const response = await fetch(url, { signal: stopFetch.signal })
        if (!response.ok) throw new Error('Could not fetch from this resourse')
        const data = await response.json()

        setData(data) // update cause array always is a new reference to memory
        setIsLoading(false) // update was true
        setError(null) // no update was null
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch is stoped')
        } else {
          setError(err.message)
          setIsLoading(false) // update was true
        }
      }
    }, 1000)

    return () => stopFetch.abort() //to stop request if component unmounts before it is finished
  }, [url]) // if state or props url will be updated useEffect will run again
  // it doesn't work if url is not a state (or props) variable

  return { data, isLoading, error }
}

export default useFetch
