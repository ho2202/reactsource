import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080/movies";

export const getList = async (pageParam) => {
  // const { page, size, type, keyword } = pageParam;

  const res = await axios.get(`${API_SERVER_HOST}/list`); //, { params: page, size: size, type: type, keyword: keyword });

  return res.data;
  //   return null;
};

export const getRead = async (id) => {
  console.log(id);
  const res = await axios.get(`${API_SERVER_HOST}/read/${id}`); //, { params: page, size: size, type: type, keyword: keyword });

  return res.data;
};
