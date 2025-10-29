import React from 'react'

function Items({fooditems, handlebuy}) {
  return (
    <li  className='flex items-center justify-between p-2 text-2xl'>{fooditems}
        <button onClick={handlebuy}>Buy</button>
        </li>  // Adding key attribute for better performance and for optimization.
  )
}

export default Items