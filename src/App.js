import React, {useState} from 'react';


function App() {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const increment = () => {
      setCount(count + 1)
    }
    const decrement = () => {
      if (count) {
        setCount(count - 1)
      }
    }
  
    return (
      <div className="App" style={{margin: '30px 0', textAlign: 'center'}}>
        <button className="btn" onClick={decrement}>-</button>
        <span style={{display: 'inline-block', padding: '0 30px', fontSize: '20px'}}>{count}</span>
        <button className="btn" onClick={increment}>+</button>
      </div>
    )
  
}

export default App;
