import React from "react";
import Header from "./Header.jsx";

const Layout = ({ children }) => {
  const user = false;

  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
