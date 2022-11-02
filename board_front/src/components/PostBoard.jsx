import React from "react";

const PostBoard = () => {
  return (
    <div className="DetailMain">
      {/* <p> 페이지의 파라미터는 {id} 입니다.</p> */}

      <div className="container1">
        <div className="div1">작성일</div>
        <div className="div2"></div>
        <div className="div3">작성자</div>
        <div className="div4">박승재 / 신성장 기술팀</div>
      </div>
      <div className="container1">
        <div className="div5">제목</div>
        <div className="div6"></div>
      </div>
      <div className="container2">
        <div className="div9">본문</div>
        <div className="div10"></div>
      </div>
    </div>
  );
};

export default PostBoard;
