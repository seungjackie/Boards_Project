import React from "react";
import { HashRouter, Route, Routes, useParams } from "react-router-dom";
import Navigation from "./components/Navigation";
import BoardDetail from "./pages/BoardDetail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Test from "./pages/Test";
import TestId from "./pages/TestId";

function Router(props: any) {
  let { id } = useParams();

  return (
    <HashRouter>
      <Navigation />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test/:id" element={<TestId />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
