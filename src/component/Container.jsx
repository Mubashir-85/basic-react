import React from 'react'

function Container(Props) {
  return (
    <div className='border-2 flex-col p-5 rounded-2xl justify-center items-center'>{Props.children}</div>
  )
}

export default Container