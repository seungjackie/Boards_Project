import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const DetailBoard = (props: any) => {
  const { state } = useLocation();

  let { id } = useParams();
  console.log(id);

  const [board, setBoard] = useState(null);

  const getBoardDetail = async () => {
    let url = `http://localhost3000/board/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data, "<<data ");
  };

  useEffect(() => {
    getBoardDetail();
  }, []);

  console.log(state);
  return (
    <div>
      {" "}
      <div className="container">
        <div className="div1">작성일</div>
        <div className="div2">2022/10/27</div>
        <div className="div3">작성자</div>
        <div className="div4">박승재 / 신성장 기술팀</div>
      </div>
      <div className="container1">
        <div className="div5">title</div>
        <div className="div6">{/* {state.data.boardAll[1].title} */}</div>
      </div>
      <div className="container2">
        <div className="div9">본문</div>
        <div className="div10">{/* {state.data.boardAll[1].contents} */}</div>
      </div>
    </div>
  );
};

export default DetailBoard;
