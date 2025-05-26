import React, { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

const Child2 = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h2>Child2</h2>
      <p>count : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Child2;
