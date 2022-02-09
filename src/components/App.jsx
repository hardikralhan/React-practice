import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function stateChange() {
    const updatedTime = new Date().toLocaleTimeString();
    return setTime(updatedTime);
  }
  // setInterval(stateChange, 1000);
  
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={stateChange}>Get Time</button>
    </div>
  );
}

export default App;
