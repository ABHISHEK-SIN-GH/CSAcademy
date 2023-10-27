import { useState } from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='relative'>
        <NavBar/>
        <Home/>
        <Footer/>
      </div>
    </>
  )
}

export default App
