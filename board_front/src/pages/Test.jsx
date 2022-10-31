import React from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_BOARD } from "../gql/home.gql";
import { useParams } from "react-router-dom";

const Test = () => {
  const params = useParams();
  console.log("params", params);
  const { loading, error, data } = useQuery(GET_BOARD);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!(</p>;

  //   console.log(data, "data<<");

  return (
    <div>
      {/* <p> 현재 페이지 파라미터는 {params} 입니다.</p> */}
      <div>{data.boardAll.map((board: any) => board.contents)} </div>
      {data.boardAll.map((board: any) => (
        <>
          <div>{board.uId_borad}</div>
          <div>{board.title}</div>
        </>
      ))}
    </div>
  );
};

export default Test;
