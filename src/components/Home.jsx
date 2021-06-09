import React from 'react'
import useFetch from 'utils/useFetch'
import BlogList from './BlogList'

function Home() {
  console.log('Home render')
  const { data, isLoading, error } = useFetch('http://localhost:8000/posts')

  return (
    <div className='home'>
      <h1>All blogs</h1>
      {error ? { error } : isLoading ? 'Loading...' : <BlogList posts={data} />}
    </div>
  )
}

export default Home
