/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React, { useState } from "react";

function Playground(props) {
  const [count, setCount] = useState(0);
  const [spinnerOn, setSpinnerOn] = useState(false);
  const [weapon, setWeapon] = useState("Scissors");

  if (spinnerOn) {
    return (
      <div className="container">
        <h3>The spinner is {spinnerOn ? "ON" : "OFF"}</h3>
        <button onClick={() => setSpinnerOn(false)}>Turn Spinner OFF</button>
      </div>
    )
  }
  
  return (
    <div>
      <h1>Playground!</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 3)}>Increment</button>
      <button onClick={() => setCount(count - 3)}>Decrement</button>
      <h3>The Spinner is {spinnerOn ? "On" : "Off"}</h3>
      <button onClick={() => setSpinnerOn(!spinnerOn)}>Toggle Spinner</button>
      <h3>The current weapon is: {weapon}</h3>
      <button onClick={() => setWeapon("Scissors")}>Pick Scissors</button>
      <button onClick={() => setWeapon("Rock")}>Pick Rock</button>
      <button onClick={() => setWeapon("Paper")}>Pick Paper</button>
    </div>
  )
}

export default Playground;