import React from "react";

function input({handlechange}) {
  return <>

    <input type="text" placeholder="Enter Your Food Items"  className="bg-white mt-2 w-90% text-black p-2" 
    onChange={handlechange}
    />
  
  </>;
}

export default input;
