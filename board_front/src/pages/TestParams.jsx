import { useQuery } from "@apollo/react-hooks";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { BOARD_ONE } from "../gql/board.gql";

const TestParams = () => {
  const { boardNum } = useParams();

  console.log(boardNum);

  const { loading, error, data } = useQuery(BOARD_ONE, {
    variables: { boardSetNum: parseInt(boardNum) },
  });
  console.log(data, "<<<<<< ");

  useEffect(() => {
    if (!loading) {
      console.log(data);
    }
  }, [data, loading]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return <div>tetst params: {boardNum}</div>;
};

export default TestParams;
