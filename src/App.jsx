import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Twowaysofincreament from './component/twowaysofincreament.jsx'

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1)
    } else {
      alert("You can't increment beyond 10")
    }

  }

  const decrementCount = ()=>{
      if (count > 0) {
      setCount(count - 1)
    } else {
      alert("You can't decrement below 0")
    }

  }

 

  return (
    <>
      <button onClick={incrementCount}>
        Increament
      </button><br />
      <h1>Count:{count}</h1>
      <button onClick={decrementCount}>Decrease</button>

      {/* <button onClick={setIncrement}>{increment}</button> */}
      <Twowaysofincreament/>

    </>
  )
}

export default App
