import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const Home = () => {
  const navi = useNavigate();
  const navTo = (path) => navi(path);

  return (
    <>
      <div>
        <Link to={"/"}>HOME</Link>
        <Link to={"/about"}>ABOUT</Link>
        <Link to={"/contact"}>CONTACT</Link>
      </div>
      <div>
        <button onClick={() => navTo("/")}>Home</button>
        <button onClick={() => navTo("/about")}>About</button>
        <button onClick={() => navTo("/contact")}>Contact</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Home;
