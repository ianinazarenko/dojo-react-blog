import React, { useState, useEffect } from 'react'
import { sayHi } from 'utils/sayHi'
import useFetch from 'utils/useFetch'
import BlogList from './BlogList'

function Home() {
  console.log('Home render')
  const [url, setUrl] = useState('http://localhost:8000/posts')
  const { data, isLoading, error } = useFetch(url)

  sayHi()

  return (
    <div className='home'>
      <h1>All blogs</h1>
      <button
        onClick={() => setUrl('https://jsonplaceholder.typicode.com/posts')}>
        Change state
      </button>
      {error ? { error } : isLoading ? 'Loading...' : <BlogList posts={data} />}
    </div>
  )
}

export default Home
