import { useState } from "react"

function Bgchanger() {
    const [bgcolor, setBgcolor] = useState ("white")
  return (
    <div className="h-full w-full" style={{backgroundColor:bgcolor}}>
        <button className="p-3 m-3 bg-blue-500 text-white rounded" onClick={()=>setBgcolor("blue")}>Blue</button>
        <button className="p-3 m-3 bg-red-500 text-white rounded" onClick={()=>setBgcolor("red")}>Red</button>
        <button className="p-3 m-3 bg-green-500 text-white rounded" onClick={()=>setBgcolor("green")}>Green</button>
        <button className="p-3 m-3 bg-yellow-500 text-white rounded" onClick={()=>setBgcolor("yellow")}>Yellow</button>
        <button className="p-3 m-3 bg-gray-500 text-white rounded" onClick={()=>setBgcolor("gray")}>Gray</button>


    </div>
  )
}

export default Bgchanger