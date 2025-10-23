import {useState} from 'react'

function twowaysofincreament() {
    const [count, setCount] = useState(0)
    const increaseCount = ()=>{
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1) // In this way React batches the state updates and only the last one takes effect
    }

     const [increment, setIncrement] = useState(0)
  const increament = ()=>{
      setIncrement(prevCount => prevCount + 1)
      setIncrement(prevCount => prevCount + 1)
      setIncrement(prevCount => prevCount + 1)
      setIncrement(prevCount => prevCount + 1) // but in this way React sees each update as separate and processes them all
  }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase</button>

    <h1>{increment}</h1>
    <button onClick={increament}>Increase</button>
    
    
    </>
  )
}

export default twowaysofincreament;