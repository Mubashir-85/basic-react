import React from "react";

function Props({color}) {
  return <>
  <h1>Colors</h1>
  {color.map((color)=>(
    <li key={color}>{color}</li> // Here, we are using props to pass the colors array from App component to Props component and then using map method to display each color in a list item. and also with destructuring assignment to extract the color prop directly.
  ))}
  </>;
}

export default Props;
