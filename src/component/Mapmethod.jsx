import React from 'react'
import Items from './Items'

function Mapmethod({fooditems}) {
   
  return (
  <>



  <ul>
    {fooditems.map((items,index)=>(
        <Items
        key={index}
        fooditems={items}
        handlebuy={()=> console.log(`${items} bought`)}
        ></Items>
    ))}
  </ul>
  
  
  
  </>
  )
}

export default Mapmethod;