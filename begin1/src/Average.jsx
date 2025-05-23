import React, { useMemo, useState } from "react";

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState([]);

  const getAverage = (list) => {
    console.log("평균 계산 중...");
    if (list.length == 0) return;

    let sum = list.reduce((a, n) => a + n);

    return sum / list.length;
  };
  const avg = useMemo(() => getAverage(list), [list]);

  const handleClick = () => {
    // list에 추가
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    console.log(nextList);
  };

  return (
    <div>
      <input type="text" placeholder="" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={handleClick}>등록</button>
      <ul>
        {list.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
      <div>number : {number}</div>
      <div>평균 : {avg}</div>
    </div>
  );
};

export default Average;
