import { useCounter } from "../context/CounterContext";

const CounterBox = () => {
  const { count, increment, decrement } = useCounter();
    return (    
    <div className="counter-box">
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  );
}


export default CounterBox;