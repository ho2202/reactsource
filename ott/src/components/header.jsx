import { Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import Error from "./Error";
import MovieLists from "../pages/MovieLists";
import MovieInfo from "../pages/MovieInfo";
import "../css/bootstrap.min.css";
import "../css/style.css";

const Header = ({ user }) => {
  let logined = false;

  if (user) {
    logined = true;
  } else {
    logined = false;
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo"></div>
          </div>

          <div className="col-lg-8">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/movies/list"}>Movie List</Link>
                  </li>
                  <li>
                    <Link to={"/games/list"}>Game List</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="header__right d-flex align-items-center gap-3">
              {/* <!-- 로그아웃 버튼 (로그인 상태에서만 보임) --> */}
              <form method="post" className="m-0 p-0">
                {showLogoutbtn(logined)}
              </form>

              {/* <!-- 로그인: 프로필 이미지 --> */}
              <Link to={"/p"}>{showProfile(user)}</Link>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/list" element={<MovieLists />} />
        <Route path="/movies/read/*" element={<MovieInfo />} />
        <Route path="/user/login" element={<Home />} />
        <Route path="/user/userProfile" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
function showLogoutbtn(logined) {
  if (logined) {
    return (
      <button type="submit" className="btn btn-outline-primary btn-sm ms-1 mr-2">
        로그아웃
      </button>
    );
  }
}
function showProfile({ user }) {
  if (user) {
    // 로그인 됨
    return <img />;
  } else {
    // 프로필 이미지 없음
    return (
      <img src="/images/sample.jpg" alt="기본 프로필" className="rounded-circle border border-primary shadow-sm" />
    );
  }
}

export default Header;
