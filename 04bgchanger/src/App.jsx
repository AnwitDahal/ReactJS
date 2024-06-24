import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [color,setColor]=useState("white")

  return (
    <>
    <div className="w-full h-screen"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
      <button className='px-4 py-1 text-white rounded-xl' style={{backgroundColor:"Red"}} onClick={()=>setColor("red")}>Red</button>
      <button className='px-4 py-1  text-white rounded-xl' style={{backgroundColor:"Blue"}} onClick={()=>setColor("blue")}>Blue</button>
      <button className='px-4 py-1  text-black rounded-xl' style={{backgroundColor:"Yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
      <button className='px-4 py-1  text-white rounded-xl' style={{backgroundColor:"Purple"}} onClick={()=>setColor("purple")}>Purple</button>
      <button className='px-4 py-1 text-white rounded-xl' style={{backgroundColor:"Green"}} onClick={()=>setColor("green")}>Green</button>
      <button className='px-4 py-1  text-black rounded-xl outline outline-1 outline-black' style={{backgroundColor:"White"}} onClick={()=>setColor("white")}>White</button>
    </div>
      </div>

    </div>
    </>
  )
}

export default App
