import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { getList } from "../api/api";
import Error from "./../components/Error";
import { useFetch } from "../hooks/useFetch";
import Loading from "./../components/Loading";

const MovieLists = (moveState) => {
  const [movies, setmovies] = useState();
  const { data, loading, error } = useFetch(moveState);
  // let list = [];
  // useEffect(() => {});
  // getList().then((data) => {
  //   list = data.dtoList;
  //   console.log(list);
  // });
  if (loading) return <Loading />;
  if (error) return <Error />;

  // return <div>{item(list)}</div>;
  return (
    <>
      <div>
        <div className="trending__product">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="section-title">
                <h4>영화리스트</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4"></div>
          </div>
          <div className="row">
            {data.dtoList.map((movie) => (
              <MovieList key={movie.mid} content={movie} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <button id="scrollToTopBtn" title="맨 위로">
          <i className="fa fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
};

export default MovieLists;
