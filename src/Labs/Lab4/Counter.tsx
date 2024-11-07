import React, { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(7); // create and initialize state variable
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      {/* render state variable handle events and update state variable with mutator 
          now updates to the state state variable do update the DOM as desired
      */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        id="wd-counter-up-click"
      >
        Up
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        id="wd-counter-down-click"
      >
        Down
      </button>
      <hr />
    </div>
  );
}
