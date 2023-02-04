import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MetaData from "../components/MetaData";

const Layout = (Component, title) => () => {
  return (
    <>
      <MetaData title={title} />
      <div className="layout overflow-hidden">
        <Navbar />
        <Component />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
