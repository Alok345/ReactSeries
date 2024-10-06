import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(15);

function addValue(){
  if (counter<20) {
    
    setCounter(counter+1)
  }
 
}
function removeValue(){
  if (counter>0) {
    setCounter(counter-1)
  }
}
  return (
    <>
      <h1>chai or react</h1>
      <h2>Add Value: {counter} </h2>

      <button onClick={addValue} >Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
