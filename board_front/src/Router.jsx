import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes, useParams } from "react-router-dom";
import Navigation from "./components/Navigation";
import PostBoard from "./pages/BoardPost";
import BoardDetail from "./pages/BoardDetail";
import BoardSearch from "./pages/BoardSearch";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Test from "./pages/Test";
import BoardPost from "./pages/BoardPost";
import PrivateRoute from "./components/PrivateRoute";

function Router(props) {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log("로그인 제한 테스트", authenticate);
  }, [authenticate]);

  return (
    <HashRouter>
      <Navigation />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        <Route path="/boardpost" element={<BoardPost />} />
        <Route path="/login" element={<Login auth={setAuthenticate} />} />
        <Route
          path="/baordpost"
          element={<PrivateRoute authenticate={authenticate} />}
        />
        <Route path="/test" element={<Test />} />
        <Route path="/board/search" element={<BoardSearch />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
