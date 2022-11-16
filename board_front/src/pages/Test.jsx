import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  BOARD_FINDONE,
  BOARD_GET,
  BOARD_ONE,
  GET_USER,
} from "../gql/board.gql";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Test.css";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { USER_USERNUM } from "../gql/user.gql";

const Test = () => {
  const navigate = useNavigate();
  const { boardNum } = useParams();
  // const { loading, error, data } = useQuery(USER_USERNUM, {
  // const { data } = useQuery(USER_USERNUM, {
  //   variables: { userNum: "U000001" },
  // });

  const QueryMultiple = () => {
    const res1 = useQuery(USER_USERNUM, {
      variables: { userNum: "U000001" },
    });
    const res2 = useQuery(BOARD_FINDONE, {
      variables: { id: 52 },
    });
    return [res1, res2];
  };

  const [{ data: data1 }, { data: data2 }] = QueryMultiple();

  const { data } = useQuery(BOARD_FINDONE, {
    variables: { id: 52 },

  })

  console.log(data,"<<, data ")

  console.log(data1);
  console.log(data2, "hh");

  // if (loading) return <Loading />;
  // if (error) return <Error />;

  // console.log(data);

  // console.log(data.boardAll[0].boardNum);

  // const dataCol = data.boardAll[0].boardNum;

  return (
    <div>
      {/* {data.boardAll.map((item) => (
        <div onClick={() => navigate(`/test/${dataCol}`)}>
          <button> hihihihih </button>
        </div>
      ))} */}
      {/* <button onClick={() => navigate("/test/2")}>hi</button> */}h
    </div>
  );
};

export default Test;
