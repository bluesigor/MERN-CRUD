import React, { useState } from "react";
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
