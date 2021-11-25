import React, { useState } from 'react';
import { Timer } from './components/Timer';


function App() {
  const [isTimer, setTimer] = useState(false)

  return (
    <div className="app">
      <h2>React Timer</h2>
      <button onClick={() => setTimer(!isTimer)}>Toogle timer</button>
      {isTimer && <Timer />}
    </div>
  )

}

export default App;
