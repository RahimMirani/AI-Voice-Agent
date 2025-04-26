import { useState, useEffect } from 'react'
import {vapi, startAssistant, stopAssistant} from "./ai"


function App() {
  useEffect(() => {
    startAssistant()
  }, [])
  
  return (
    <>
      
    </>
  )
}

export default App
