import React from "react";

const MyComponent = ({ name, age = "15" }) => {
  // const name = "";

  const user = {
    name: "Jane",
    email: "jane@mail.com",
  };
  const colors = ["red", "blue", "green"];
  const numbers = [1, 2, 3, 4];
  const items = [
    { id: 1, price: 10 },
    { id: 2, price: 20 },
  ];

  return (
    <>
      <h2>
        name: {user.name}({user.email})
      </h2>
      <h2>{colors[0]}</h2>
      <ul>
        {colors.map((color) => (
          <li>color : {color}</li>
        ))}
      </ul>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.price}</li>
        ))}
      </ul>
      <p>doubles : {numbers.map((n) => n * 2).join(", ")}</p>
      <p>evens : {numbers.filter((n) => n % 2 == 0).join(", ")}</p>

      <div>나의 새 컴포넌트</div>
      <h1>{name}</h1>
      {name === "리액트" && <p>리액트</p>}
      <p>name: {name ?? <em>No Name</em>}</p>
      <p>name: {name || <em>No Name</em>}</p>
    </>
  );
};

export default MyComponent;
