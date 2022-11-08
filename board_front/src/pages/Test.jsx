import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { BOARD_GET, GET_USER } from "../gql/board.gql";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Test.css";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Test = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(BOARD_GET, {
    variables: {
      offset: 0,
      limit: 3,
    },
  }); // 개수 제한 index

  if (loading) return <Loading />;
  if (error) return <Error />;

  console.log(data);

  return <div></div>;
};

export default Test;
