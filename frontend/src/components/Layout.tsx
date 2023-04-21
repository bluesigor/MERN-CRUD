import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({ children }: React.Element) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
