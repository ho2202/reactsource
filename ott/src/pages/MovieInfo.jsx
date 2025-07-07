import React from "react";
import MovieDetail from "./../components/MovieDetail";
import Reply from "./../components/Reply";
import { getRead } from "./../api/api";
import { useParams } from "react-router-dom";

const MovieInfo = () => {
  const id = useParams();
  return (
    <div>
      <h1>영화 상세 정보</h1>
      <MovieDetail movie={id} />
      <Reply />
    </div>
  );
};

export default MovieInfo;
