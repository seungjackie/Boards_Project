import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const BoardDetail = () => {
  const location = useLocation();
  //   console.log(state, "<<< state");
  let { id } = useParams();
  console.log(id, "<<<<< id");

  const state = location?.state;
  const boardData = state?.data;

  return (
    <div className="DetailMain">
      <div className="container1">
        <div className="div1">작성일</div>
        <div className="div2">{boardData.createTime}</div>
        <div className="div3">작성자</div>
        <div className="div4">박승재 / 신성장 기술팀</div>
      </div>
      <div className="container1">
        <div className="div5">제목</div>
        <div className="div6">
          <h1>{boardData.title}</h1>
        </div>
      </div>
      <div className="container2">
        <div className="div9">본문</div>
        <div className="div10">
          <h1>{boardData.contents}</h1>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
