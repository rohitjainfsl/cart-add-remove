import { useState } from "react";

function Counter() {
  //   let counter = 0;

  // STATES ARE IMMUTABLE

  const [counter, setCounter] = useState(0);

  // const counter = 0
//   function setCounter(x) {
//     counter = x;
//   }

  function inc() {
    // counter++;
    setCounter(counter + 1)
    
  }
  function dec() {
    // counter--;
    setCounter(counter - 1)
    
  }

  return (
    <>
      <button onClick={inc}>Increment</button>
      <p>{counter}</p>
      <button onClick={dec}>Decrement</button>
    </>
  );
}
export default Counter;
