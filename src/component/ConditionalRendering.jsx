import React from 'react'

function ConditionalRendering() {
    let fruits = ["apple", "banana", "grapes", "mango"]
    // let fruits = []
  return (
    <>
    <h1>Conditional Rendering Example</h1>
    <ul>
        {fruits.length > 0 ? (    // this is conditional rendering used for enhance the performance. This is using ternary operator.
            fruits.map((fruit)=>(
                <li key={fruit}>{fruit}</li>    
            ))
        ) : (
            <p>No fruits available</p>
        )}
    </ul>

    <h1>Example No : 2</h1>
    <ul>
        {fruits.length > 0 && fruits.map((fruit)=>(  //This is another way of conditional rendering using logical AND (&&) operator.  output will be same as above.
            <li key={fruit}>{fruit}</li>
        ))}
    </ul>
    </>
  )
}

export default ConditionalRendering