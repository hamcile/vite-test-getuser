import { useState } from 'react'
import './App.css'
import KioskApp from './check'
import ErrorBoundary from './ErrorBoundary'
import Bomb from './bomb'
import GetUser from './getdata'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ErrorBoundary fallback = "there was an error" >
        <h1>my first component</h1>
        <KioskApp />
        {/* <Bomb/> */}
        <h1>Input Your Data</h1>
        <GetUser />
      </ErrorBoundary>
      
    </> 
  )
}

export default App
