import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lectures from './lecture'
import PureLectures from './pure'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PureLectures/>
{/* <Lectures/> */}
    </>
  )
}

export default App
