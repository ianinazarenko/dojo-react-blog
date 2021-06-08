import React from 'react'
import Home from 'components/Home'
import Navbar from 'components/Navbar'

function App() {
  // console.log('App render')

  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  )
}

export default App
