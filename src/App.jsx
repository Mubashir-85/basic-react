import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Twowaysofincreament from "./component/twowaysofincreament.jsx";
import Bgchanger from "./component/bgchanger.jsx";
import Mapmethod from "./component/Mapmethod.jsx";
import ConditionalRendering from "./component/ConditionalRendering.jsx";
import Props from "./component/Props.jsx";
import Container from "./component/Container.jsx";
import Input from "./component/input.jsx";

function App() {
  const [fooditems, setFooditems] = useState([]);
  let inputRef = useRef();
  const handlechange = () => {
    if(inputRef.current.value===""){
      alert("Please enter a food item");
      return;
    }else{
      
      let newFooditems = inputRef.current.value;
      inputRef.current.value = "";
      let Newfoods = [...fooditems, newFooditems];
      setFooditems(Newfoods);
    }

    
  };

  let colors = ["red", "blue", "green", "yellow", "pink"];
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("You can't increment beyond 10");
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("You can't decrement below 0");
    }
  };

  return (
    <>
      <Container>
        <center>
          <button onClick={incrementCount}>Increament</button>
          <br />
          <h1>Count:{count}</h1>
          <button onClick={decrementCount}>Decrease</button>
        </center>
      </Container>

      {/* <button onClick={setIncrement}>{increment}</button> */}
      <Twowaysofincreament />
      <Bgchanger />

      <Container>
        <h1 className="">List of Food Items</h1>
        <Input handlechange={handlechange} inputRef={inputRef} />
        <Mapmethod fooditems={fooditems} />
      </Container>

      <ConditionalRendering />

      <Container>
        <Props color={colors} />
      </Container>
      <Container>
        <p className="text-3xl">This is the Example of Passing Children</p>
      </Container>
    </>
  );
}

export default App;
