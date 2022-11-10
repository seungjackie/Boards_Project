import { useQuery } from "@apollo/react-hooks";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {
  BOARD_GET,
  BOARD_GET_ONE,
  BOARD_GET_ONE_TEST,
  BOARD_ONE,
} from "../gql/board.gql";
import "./BoardDetail.css";

const BoardDetail = () => {
  const location = useLocation();
  //   console.log(state, "<<< state")
  // const { id } = useParams();
  // console.log(id, " <<<<   id ");

  const { boardNum } = useParams();
  const { loading, error, data } = useQuery(BOARD_ONE, {
    variables: { boardSetNum: parseInt(boardNum) }, // boardNum을 int로 형변환
  });

  // test데이터는 잘 불러와 짐
  // const { loading, error, data } = useQuery(BOARD_GET); // 개수 제한 index

  // real data
  // const { loading, error, data } = useQuery(BOARD_GET_ONE, {
  //   variables: { boardFindOneNum: id },
  // });
  // console.log(data, "data");

  // const { loading, error, data } = useQuery(BOARD_ONE, {
  //   variables: { boardSetNum: parseInt(id) }, // boardNum을 int로 형변환
  // });

  useEffect(() => {
    // if (!loading) {
    // console.log(data.boardOne);
    // }
  }, [data]);

  const state = location?.state;
  const boardData = state?.data;

  // if (loading) return <Loading />
  // if (error) return <Error />

  return (
    <div className="DetailMain">
      {/* <div>
        {data.boardAll.map((item) => (
          <div>title: {item.title}</div>
        ))}
      </div> */}
      ;
      <div className="container1">
        <div className="div1">작성일</div>
        <div className="div2">
          1{/* {boardData.createTime.slice(0, -14)} */}
        </div>
        <div className="div3">작성자</div>
        <div className="div4">박승재 / 신성장 기술팀</div>
      </div>
      <div className="container1">
        <div className="div5">제목</div>
        <div className="div6">
          <h1>1{/* {boardData.title} */}</h1>
        </div>
      </div>
      <div className="container2">
        <div className="div9">본문</div>
        <div className="div10">
          <h1>2{/* {boardData.contents} */}</h1>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
