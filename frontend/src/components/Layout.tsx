import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({ children }: React.Element) => {
  const [state, setState] = useState();
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
