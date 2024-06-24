import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter,Setcounter]=useState(1)
  //let counter=5;
const addValue=()=>{
console.log(counter=counter+1)
Setcounter(counter)
}

const decValue=()=>{
  console.log(counter=counter-1)
  Setcounter(counter)
}
    return (
    <>
    <h2>React App</h2>
    <h1>Counter Value:{counter}</h1>
    <br />
    <button
    onClick={addValue}
    >Increase Value {counter}</button>
    <br />
    <button
    onClick={decValue}
    >Decrease Value {counter}</button>
    <br />
    <p>Footer:{counter}</p>

    </>

  )
}


export default App
