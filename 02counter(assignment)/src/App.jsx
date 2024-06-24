import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]=useState(1)
const AddValue=()=>{
  if(counter<20){
  setCounter(counter=counter+1)
  console.log(counter)
  }
}
const RemValue=()=>{
  if(counter>0){
  setCounter(counter=counter-1)
  console.log(counter)
  } 
}


  return (
    <>
    <h1>Hello React</h1>
    <h2>Counter:{counter}</h2>
    <br />
    <button
    onClick={AddValue}
    >Add Value:{counter}</button>
    <br />
    <button
    onClick={RemValue}
    >Remove Value:{counter}</button>
    </>
  )
}

export default App
