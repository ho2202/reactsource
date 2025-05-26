// 서버로 요청 보내기
// fetch(path, { method: "post", body: JSON, headers: { "Content-Type": "application/json" } })
//   .then()
//   .then();

// const fetchData = async () => {
//   const res = await fetch(path);
//   const data = await res.json();
// };

import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080/todos/";

export const getList = async () => {
  const res = await axios.get(API_SERVER_HOST);
  return res.data;
};

export const postTodo = async (todo) => {
  const res = await axios.get(`${API_SERVER_HOST}/add`, todo);
  return res.data;
};

export const putTodo = async (todo) => {
  const res = await axios.get(`${API_SERVER_HOST}/${todo.id}`, todo);
  return res.data;
};

export const removeTodo = async (id) => {
  const res = await axios.get(`${API_SERVER_HOST}${id}`);
  return res.data;
};
