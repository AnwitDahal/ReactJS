import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <button className='bg-green-600 text-black hover:bg-green-700 rounded-xl hover:border hover:border-pink-700 mb-7'>Hello World</button>
    <Card username="Anwit" btnText="Click ME"/>
    <Card username="React" />
    </>
  )
}

export default App
