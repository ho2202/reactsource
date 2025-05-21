import React, { useState } from "react";

const Counter = () => {
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
};

export default Counter;
