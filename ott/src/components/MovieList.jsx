import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";

const MovieList = ({ moveState }) => {
  const { data, loading, error } = useFetch(moveState);
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <div class="trending__product">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-8">
            <div class="section-title">
              <h4>영화리스트</h4>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4"></div>
        </div>
        <div class="row">{data.dtoList.map((content) => item(content))}</div>
        <div>
          <button id="scrollToTopBtn" title="맨 위로">
            <i class="fa fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

function item(content) {
  const getImageUrl = (imgUrl) => {
    // imgUrl이 null이거나 비어있으면 기본 이미지 반환
    if (!imgUrl) {
      return "/images/sample.jpg";
    }
    return `/images/movieimages/${imgUrl}`;
  };

  // 영화 상세 페이지 동적인 링크 생성
  const movieInfoLink = `/movies/read/${content.mid}`;

  return (
    <div class="col-lg-4 col-md-6 col-sm-6">
      <div class="product__item">
        <div class="product__item__pic">
          <a href={movieInfoLink}>
            <img src={getImageUrl(content.imgUrl)} alt="영화 이미지" loading="lazy" class="product__item__pic" />
          </a>
          {/* <!-- 팔로우수  --> */}
          <div class="comment_movie">{"Follow: 명"}</div>
          {/* <!-- 댓글갯수  --> */}
          <div class="view_movie">{"Re: 개"}</div>
          {/* <!-- <div class="ep">18 / 18</div> --> */}
        </div>

        <div class="product__item__text">
          <ul class="genre">
            <li>{content.nationNm}</li>
            <li>{content.genres}</li>
          </ul>
          <h5>
            <a href={"/"}></a>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
