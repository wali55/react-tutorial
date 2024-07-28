import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {Outlet} from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
