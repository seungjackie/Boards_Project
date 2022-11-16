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
import BoardEdit from "./pages/BoardEdit";
import TestParams from "./pages/TestParams";

function Router(props) {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("loginId") === null) {
      // console.log("isLogin?? :: ", authenticate);
    } else {
      setAuthenticate(true);
      // console.log("isLogin?? ::", authenticate);
    }
  }, [authenticate]);

  return (
    <HashRouter>
      <Navigation />
      <br />
      <Routes>
        <Route path="/" element={<Home auth={authenticate} />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        <Route path="/edit/:id" element={<BoardEdit />} />
        <Route path="/boardpost" element={<BoardPost />} />
        <Route path="/login" element={<Login auth={authenticate} />} />
        <Route
          path="/baordpost"
          element={<PrivateRoute authenticate={authenticate} />}
        />
        <Route path="/test" element={<Test />} />
        <Route path="/test/:boardNum" element={<TestParams />} />
        <Route path="/board/search" element={<BoardSearch />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
