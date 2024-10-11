import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [question, setQuestion] = useState("")
  const [answer,setAnswer] = useState("")
  async function generateAnswer(){
    const response=await axios({
      
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA4h1rABJoFFeETgbRxfRHvvDeXbVzdY38"
      ,
      method: 'POST',
      data: {
        contents:
        [
          {parts:[{text:question}]}
        ]
      }
    })
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"])
  }

  return (
   <>
   <h1 className='bg-purple-400'>ChatGpt using Gemini</h1>
   <textarea className='border border-4 border-indigo-600 rounded w-full bg-blue-200' placeholder='ask any thing to me' value={question} cols="30" rows="10" onChange={(e)=>setQuestion(e.target.value)}></textarea>
   <button className='bg-gray-600 text-3xl p-4 text-white' onClick={generateAnswer}>Generate answer</button>

   {/* <pre>{answer}</pre> */}
   <pre>{answer}</pre>
   </>
  )
}

export default App
