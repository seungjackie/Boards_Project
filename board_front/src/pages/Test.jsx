import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { BOARD_GET, BOARD_ONE, GET_USER } from "../gql/board.gql";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Test.css";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Test = () => {
  const navigate = useNavigate();
  const { boardNum } = useParams();
  const { loading, error, data } = useQuery(BOARD_ONE, {
    variables: {boardSetNum: parseInt(boardNum)}
  }); // 개수 제한 index

  // const { data2 } = useQuery(BOARD_ONE, {
  //   variables: { boardSetNum: parseInt(boardNum) },
  // });
  // console.log(data2, "<<<<<< ");

  // console.log(data);

  if (loading) return <Loading />;
  if (error) return <Error />;

  console.log(data.boardAll[0].boardNum);

  const dataCol = data.boardAll[0].boardNum;

  return (
    <div>
      {data.boardAll.map((item) => (
        <div onClick={() => navigate(`/test/${dataCol}`)}>
          <button> hihihihih </button>
        </div>
      ))}
      <button onClick={() => navigate("/test/2")}>hi</button>
    </div>
  );
};

export default Test;
