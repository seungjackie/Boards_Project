import React from "react";
import { Navigate } from "react-router-dom";
import BoardPost from "../pages/BoardPost";

const PrivateRoute = ({ authenticate }) => {
  console.log("auth  값 : ", authenticate);
  return authenticate === true ? <BoardPost /> : <Navigate to="/login" />;
};

export default PrivateRoute;
