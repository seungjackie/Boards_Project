import React from "react";
import { HashRouter, Route, Routes, useParams } from "react-router-dom";
import Navigation from "./components/Navigation";
import PostBoard from "./pages/BoardPost";
import BoardDetail from "./pages/BoardDetail";
import BoardSearch from "./pages/BoardSearch";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Test from "./pages/Test";
import TestId from "./pages/TestId";
import BoardPost from "./pages/BoardPost";

function Router(props) {
  let { id } = useParams();

  return (
    <HashRouter>
      <Navigation />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        <Route path="/boardpost" element={<BoardPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/baordpost" element={<PostBoard />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test/:id" element={<TestId />} />
        <Route path="/board/search" element={<BoardSearch />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
