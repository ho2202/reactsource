import React from "react";
import { useFetch } from "../hooks/useFetch";

const MovieList = ({ content }) => {
  // const { data, loading, error } = useFetch(moveState);

  const getImageUrl = (imgUrl) => {
    // imgUrl이 null이거나 비어있으면 기본 이미지 반환
    if (!imgUrl) {
      return "../images/sample.jpg";
    }
    return `../images/movieimages/d225f5b5-719d-4bd6-ad4c-797cd42e6e5a.jpg`;
  };

  // 영화 상세 페이지 동적인 링크 생성
  const movieInfoLink = `/movies/read/${content.mid}`;

  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="product__item">
        <div className="product__item__pic">
          <a href={movieInfoLink}>
            <img src={getImageUrl(content.imgUrl)} alt="영화 이미지" loading="lazy" className="product__item__pic" />
          </a>
          {/* <!-- 팔로우수  --> */}
          <div className="comment_movie">{"Follow: " + `${content.followcnt}` + "명"}</div>
          {/* <!-- 댓글갯수  --> */}
          <div className="view_movie">{"Re: " + `${content}` + "개"}</div>
          {/* <!-- <div className="ep">18 / 18</div> --> */}
        </div>

        <div className="product__item__text">
          <ul className="genre">
            <li>{content.nationNm}</li>
            <li>{content.genres}</li>
          </ul>
          <h5>
            <a href={movieInfoLink}>{content.title}</a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
