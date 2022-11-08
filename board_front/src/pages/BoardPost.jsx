import React, { useState } from "react";
import "./BoardDetail.css";
import { useMutation } from "@apollo/react-hooks";
import { BOARD_ADD } from "../gql/board.gql";

const BoardPost = () => {
  const [inputBoardTitle, setInputBoardTitle] = useState("");
  const [inputBoardContents, setInputBoardContents] = useState("");
  const [inputBoardNum, setInputBoardNum] = useState("");
  const [inputUserNum, setInputUserNum] = useState("");
  const [inputFileNum, setInputFileNum] = useState("");

  let now = new Date();
  console.log(now);

  const [BoardAdd] = useMutation(BOARD_ADD, {
    variables: {
      title: inputBoardTitle,
      contents: inputBoardContents,
      boardNum: inputBoardNum,
      userNum: inputUserNum,
      fileNum: inputFileNum,
    },
  });

  const AddButton = async () => {
    const a = await BoardAdd();
    console.log(a);
    console.log("inputTitle======", inputBoardTitle);
  };

  return (
    <div className="DetailMain">
      {/* <p> 페이지의 파라미터는 {id} 입니다.</p> */}

      <div className="container1">
        <div className="div1">작성일</div>
        <div className="div2">{now.toLocaleDateString("ko-kr")}</div>
        <div className="div3">작성자</div>
        <div className="div4">박승재 / 신성장 기술팀</div>
      </div>
      <div className="container1">
        <div className="div5">제목</div>
        <div className="div6">
          <input
            value={inputBoardTitle}
            onChange={(e) => setInputBoardTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="container2">
        <div className="div9">본문</div>
        <div className="div10">
          <input
            value={inputBoardContents}
            onChange={(e) => setInputBoardContents(e.target.value)}
          />
        </div>
      </div>
      <div>
        보드 넘:
        <input
          value={inputBoardNum}
          onChange={(e) => setInputBoardNum(e.target.value)}
        />
      </div>
      <div>
        user num:
        <input
          value={inputUserNum}
          onChange={(e) => setInputUserNum(e.target.value)}
        />
      </div>
      <div>
        file Num:
        <input
          value={inputFileNum}
          onChange={(e) => setInputFileNum(e.target.value)}
        />
      </div>

      <button onClick={AddButton}>등록</button>
    </div>
  );
};

export default BoardPost;
