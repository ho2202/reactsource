// 콜백 지옥 해결법
// 1 promise
// 대기, 이행, 실패

// new Promise((resolve, reject) => {
// 이행 : 프로미스가 값을 반환
//     resolve();
// 실패
//     reject(new Error("에러 발생"));
// });
// 2 async, await
function getData(callbackFunc) {
  $.get("https://jsonplaceholder.typicode.com/todos/1", function (res) {
    callbackFunc(res);
  });
}

function test() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("2초 지남 "));
    }, 2000);
  })
    .then(() => console.log("Bye"))
    .catch((res) => console.log("error"));

  console.log("Hello");
  console.log(p1);
}

test();

function getDat(callbackFunc) {
  $.get("https://jsonplaceholder.typicode.com/todos/1", function (res) {
    callbackFunc(res);
  });
}

getData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
