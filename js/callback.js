// 비동기

// ajax 예전 방식(jQuery)
function getData(callbackFunc) {
  let result;
  $.get("https://jsonplaceholder.typicode.com/todos/1", function (res) {
    // result = res;
    callbackFunc(res);
  });
  return result;
}

// getData((data) => console.log());

// fetch
function getData1(callbackFunc) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => callbackFunc(data));
}
function getData2(callbackFunc) {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res) => res.json())
    .then((data) => callbackFunc(data));
}

getData1((data) => {
  console.log(data);
  getData2((data) => {
    console.log(data);
  });
});
