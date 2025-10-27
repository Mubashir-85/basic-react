import React from 'react'

function Mapmethod() {
    let fooditmes = ["idli", "dosa", "vada", "puri", "chapati", "paratha"]
  return (
  <>

  <h1 className=''>List of Food Items</h1>

  <ul>
    {fooditmes.map((items)=>(
        <li key={items}>{items}</li>  // Adding key attribute for better performance and for optimization.
    ))}
  </ul>
  
  
  
  </>
  )
}

export default Mapmethod;