import React, { useEffect, useState } from "react";

const Life = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    console.log("마운트 시 실행");
    setTimeout(() => {
      alert("Hello ");
    }, 1000);

    return console.log("언마운트 시 실행");
  }, [count, flag]);

  return (
    <div>
      <h1>컴포넌트 {count}</h1>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
};

export default Life;
