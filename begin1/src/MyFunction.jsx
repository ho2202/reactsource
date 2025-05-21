import React from "react";

const MyFunction = () => {
  const name = "홍";
  // 함수 작성 시 코드가 한줄이면 중괄호, return 생략 가능
  const greeting = (name) => `Hello, ${name}`;
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  return (
    <div>
      <p>{greeting("Alice")}</p>
      <p>{formatDate(new Date())}</p>
      <p>
        {(() => {
          const hours = new Date().getHours();
          return hours < 12 ? "morning" : "afternoon";
        })()}
      </p>
    </div>
  );
};

export default MyFunction;
