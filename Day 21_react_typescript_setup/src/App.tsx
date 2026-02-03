import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <div className="counter-display">
        <h2>{count}</h2>
      </div>
      <div className="counter-buttons">
        <button onClick={decrement} className="btn decrement">-</button>
        <button onClick={reset} className="btn reset">Reset</button>
        <button onClick={increment} className="btn increment">+</button>
      </div>
    </div>
  )
}

export default App
