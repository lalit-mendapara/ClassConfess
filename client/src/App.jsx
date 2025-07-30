import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Home/>
    </>
  )
}

export default App
