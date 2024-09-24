import { useState } from 'react'
import './App.css'
import HedderComponent from './assets/Components/Header/HedderComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HedderComponent/>
    </>
  )
}

export default App
