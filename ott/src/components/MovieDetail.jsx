import { useEffect, useState } from "react";
import { getRead } from "../api/api";
import Loading from "./Loading";
import { useRead } from "../hooks/useRead";
import Error from "./Error";

const MovieDetail = ({ id }) => {
  const [content, setContent] = useState(null);
  const [isFollowed, setIsFollowed] = useState(false);
  const idString = id["*"];
  const [data, loading, error] = useRead(idString);
  // useEffect(() => {
  //   getRead(idString).then((data) => {
  //     setContent(data);
  //   });
  // }, [id, idString]);
  console.log(loading);

  if (loading) return <Loading />;
  if (error) return <Error />;
  setContent[data.dtoList];

  const handleFollow = () => {
    // 여기 follow/unfollow 기능 넣기
    setIsFollowed(!isFollowed);
  };
  const followbtn = () => {
    return (
      <button className={`follow-btn ${isFollowed ? "follow" : ""}`} onClick={handleFollow}>
        {isFollowed ? "Followed" : "Follow"}
      </button>
    );
  };

  if (!content) return <Loading />;

  return (
    <div>
      <section className="anime-details spad">
        <div className="container">
          <div className="anime__details__content">
            <div className="row">
              <div className="col-lg-3">
                <img
                  src={content.image != null ? `/images/movieimages/${content.image.imgName}` : "/images/sample.jpg"}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/sample.jpg";
                  }}
                  alt="영화 이미지"
                  loading="lazy"
                  className="anime__details__pic"
                />
              </div>
              <div className="col-lg-9">
                <div className="anime__details__text">
                  <div className="anime__details__title">
                    <h3>{content.title}</h3>
                    <span>{content.director}</span>
                    <span>{content.actors}</span>
                    <br />
                    <h4 className="synopsis_t">시놉시스</h4>
                    <span className="synopsis">{content.synopsis}</span>
                  </div>
                  <div className="anime__details__widget">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <ul>
                          <li>
                            <span>개봉일</span> <span>{content.openDate}</span>
                          </li>
                          <li>
                            <span>장르</span>
                            <span>{content.genres}</span>
                          </li>
                          <li>
                            <span>상영시간</span>
                            <span>{content.showTm}</span>
                          </li>
                          <li>
                            <span>적정관람등급</span>
                            <span>{content.gradeNm}</span>
                          </li>
                          <li>
                            <span>개봉국가</span>
                            <span>{content.nationNm}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="anime__details__btn">{followbtn}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="center-line"></div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
