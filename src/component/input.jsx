import React from "react";

function input({handlechange, inputRef}) {
  return <>

    <input type="text" placeholder="Enter Your Food Items"  className="bg-white mt-2 w-90% text-black p-2" 
    ref={inputRef}

    />
    <button
    onClick={handlechange}

    >ADD</button>
  
  </>;
}

export default input;
