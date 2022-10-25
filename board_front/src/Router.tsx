import React from "react";
import { HashRouter , Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";

function Router(props: any) {
  return (
    <HashRouter >
      <Navigation />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter >
  );
}

export default Router;