import React from 'react'
import Items from './Items'

function Mapmethod({fooditems, handlebuy}) {
   
  return (
  <>



  <ul>
    {fooditems.map((items)=>(
        <Items
        key={items}
        fooditems={items}
        handlebuy={()=> console.log(`${items} bought`)}
        ></Items>
    ))}
  </ul>
  
  
  
  </>
  )
}

export default Mapmethod;