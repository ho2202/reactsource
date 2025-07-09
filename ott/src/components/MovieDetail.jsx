import { useEffect } from "react";
import { getRead } from "../api/api";
import Loading from "./Loading";
import { useState } from "react";

const MovieDetail = ({ id }) => {
  const [content, setContent] = useState(null);
  // const { data, loading, error } = ;
  const idString = id["*"];

  useEffect(() => {
    getRead(idString).then((data) => {
      setContent(data);
    });
  }, [id]);

  if (!content) return <Loading />;

  return (
    <div>
      <section class="anime-details spad">
        <div class="container">
          <div class="anime__details__content">
            <div class="row">
              <div class="col-lg-3">
                <img
                  src={content.image != null ? `/images/movieimages/${content.image.imgName}` : "/images/sample.png"}
                  onError="/images/sample.jpg"
                  alt="영화 이미지"
                  loading="lazy"
                  class="anime__details__pic"
                />
              </div>
              <div class="col-lg-9">
                <div class="anime__details__text">
                  <div class="anime__details__title">
                    <h3>{content.title}</h3>
                    <span>{content.director}</span>
                    <span>{content.actors}</span>
                    <br />
                    <h4 class="synopsis_t">시놉시스</h4>
                    <span class="synopsis">{content.synopsis}</span>
                  </div>
                  <div class="anime__details__widget">
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
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
                  <div class="anime__details__btn" th:if="${#authentication.name !='anonymousUser'}">
                    <button
                      class="follow-btn"
                      th:classappend="${isFollowed} ? ' follow' : ''"
                      th:data-mid="${content.mid}"
                      th:text="${isFollowed} ? 'Followed' : 'Follow'"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="center-line"></div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
