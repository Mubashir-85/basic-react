import React from 'react'

function ConditionalRendering() {
    let fruits = ["apple", "banana", "grapes", "mango"]
    // let fruits = []
  return (
    <>
    <h1>Conditional Rendering Example</h1>
    <ul>
        {fruits.length > 0 ? (    // this is conditional rendering used for enhance the performance
            fruits.map((fruit)=>(
                <li key={fruit}>{fruit}</li>    
            ))
        ) : (
            <p>No fruits available</p>
        )}
    </ul>
    </>
  )
}

export default ConditionalRendering