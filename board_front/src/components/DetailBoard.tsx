import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const DetailBoard = (props: any) => {
  const location = useLocation();
  //   console.log(state, "<<< state");
  //   let { id } = useParams();
  //   console.log(id);

  const state = location.state as { data: any };
  const boardData = state.data;
  console.log(boardData);

  console.log(boardData.contents, "<<<");
  console.log(boardData.title, "<<<");

  //   const getBoardDetail = async () => {
  //     let url = `http://localhost3000/board/${id}`;
  //     let res = await fetch(url);
  //     let data = await res.json();
  //     console.log(data, "<<data ");
  //   };

  useEffect(() => {
    console.log(location);
  }, [location]); // 바뀌는 값 적용

  return (
    <div className="DetailMain">
      <div className="container1">
        <div className="div1">작성일</div>
        <div className="div2">2022/10/27</div>
        <div className="div3">작성자</div>
        <div className="div4">박승재 / 신성장 기술팀</div>
      </div>
      <div className="container1">
        <div className="div5">제목</div>
        <div className="div6">{boardData.title}</div>
      </div>
      <div className="container2">
        <div className="div9">본문</div>
        <div className="div10">{boardData.contents}</div>
      </div>
    </div>
  );
};

export default DetailBoard;
