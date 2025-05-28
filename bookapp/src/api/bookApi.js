import axios from "axios";

export const API_SER = "http://localhost:8080/api/books";

export const getList = async () => {
  const res = await axios.get(API_SER);
  return res.data;
};
export const getBook = async (id) => {
  const res = await axios.get(`${API_SER}/${id}`);
  return res.data;
};
export const postBook = () => {};
export const putBook = () => {};
export const removeBook = () => {};
