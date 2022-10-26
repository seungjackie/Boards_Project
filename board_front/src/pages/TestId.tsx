import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_BOARD } from "../gql/home.gql";
import { useParams } from "react-router-dom";

const TestId = () => {
  let { id } = useParams();
  console.log("id: ", id, typeof id);

  const { loading, error, data } = useQuery(GET_BOARD);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!(</p>;

  return (
    <div>
      <p>지금 파라미터는 {id} 입니다.</p>
      <div>
        {data.boardAll.map((board: any) => (
          <>
            <div>{board.uId_borad}</div>
            <div>{board.title}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TestId;
