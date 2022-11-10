import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BOARD_EDIT, BOARD_GET, BOARD_GET_ONE } from "../gql/board.gql";

const BoardEdit = () => {
  const { id } = useParams();

  const [updatetBoardTitle, setUpdateBoardTitle] = useState("");
  const [updateBoardContents, setUpdatetBoardContents] = useState("");
  const [updateBoardNum, setUpdateBoardNum] = useState(0);

  console.log(id);

  let now = new Date();
  //   console.log(now);

  const location = useLocation();
  const state = location?.state;
  const boardData = state?.data;
  console.log(state);

  const { loading, error, data } = useQuery(BOARD_GET_ONE, {
    variables: {
      where: {
        boardFindOneNum: id,
      },
    }, // id check
  });

  //   console.log(data);

  const [BoardAdd] = useMutation(BOARD_EDIT, {
    variables: {
      title: updatetBoardTitle,
      contents: updateBoardContents,
      boardNum: updateBoardNum,
    },
  });

  const AddButton = async () => {
    const a = await BoardAdd();
    console.log(a);
    console.log("inputTitle======", updatetBoardTitle);
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
            value={updatetBoardTitle}
            onChange={(e) => setUpdateBoardTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="container2">
        <div className="div9">본문</div>
        <div className="div10">
          <input
            value={updateBoardContents}
            onChange={(e) => setUpdatetBoardContents(e.target.value)}
          />
        </div>
      </div>

      <button onClick={AddButton}>등록</button>
    </div>
  );
};

export default BoardEdit;
