import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <section class="product spad">
        <div class="container">
          <div class="row">
            <div class="trending__product">
              <div class="row"></div>
            </div>
            <div class="center-line"></div>
            <div class="popular__product">
              <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-8">
                  <div class="section-title">
                    <h4>영화 추천</h4>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4">
                  <div class="btn__all">
                    <div class="primary-btn">
                      <form action="/api/movies/list" method="get" class="search-box">
                        <select name="type" id="type">
                          <option value="t">제목</option>
                          {/* <!-- <option value="g">장르</option> --> */}
                          <option value="d">감독</option>
                        </select>
                        <input type="text" name="keyword" id="search" />
                      </form>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="product__item mainmovie">
                      <a to={"/api/movies/read/"}>
                        <img alt="영화 이미지" loading="lazy" class="anime__details__pic" />
                      </a>

                      <div class="product__item__text">
                        <h5>
                          <a>제목</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div class="center-line"></div>
              <div class="popular__product">
                <div class="row">
                  <div class="col-lg-8 col-md-8 col-sm-8">
                    <div class="section-title">
                      <h4>게임 추천</h4>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="btn__all">
                      <div class="primary-btn">
                        <form action="/api/games/list" method="get" class="search-box">
                          <select name="type" id="type">
                            <option value="t">제목</option>
                            <option value="d">개발사</option>
                            <option value="p">배급사</option>
                          </select>
                          <input type="text" name="keyword" id="search" />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="filter__gallery"></div>
                  <div class="popular__product"></div>
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                      <div class="product__item">
                        <a>
                          <img alt="게임 이미지" loading="lazy" class="anime__details__pic" />
                        </a>

                        <div class="product__item__text">
                          <h5>
                            <a>제목</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
