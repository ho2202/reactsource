import React from "react";
import MovieList from "../components/MovieList";
import { getList } from "../api/api";

const MovieLists = () => {
  const list = getList().then((data) => {});
  console.log(list);
  const dto = list.dtoList;

  function item(dto) {
    list.forEach((content) => {
      <MovieList moveState={content} />;
    });
  }

  return <div>{item(list)}</div>;
};

export default MovieLists;
