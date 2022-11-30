import React, { useEffect, useState } from "react";
import "./BoardDetail.css";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { BOARD_ADD } from "../gql/board.gql";
import { useNavigate } from "react-router-dom";
import { USER_ONE } from "../gql/user.gql";
import Loading from "../components/Loading";
import Error from "../components/Error";

const BoardPost = () => {
  const [inputBoardTitle, setInputBoardTitle] = useState("");
  const [inputBoardContents, setInputBoardContents] = useState("");

  const navigate = useNavigate();

  let now = new Date();

  const loginIdtest = sessionStorage.getItem("loginId");

  const { loading, error, data } = useQuery(USER_ONE, {
    variables: { userId: loginIdtest },
  });

  const [BoardAdd] = useMutation(BOARD_ADD, {
    variables: {
      title: inputBoardTitle,
      contents: inputBoardContents,
      userNum: data?.userFindOne.userNum,
    },
  });

  const AddButton = async () => {
    const a = await BoardAdd();
    console.log(a);
    console.log("inputTitle======", inputBoardTitle);
    alert("글 작성이 완료 되었습니다.");
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    if (loading) {
      console.log(loginIdtest);
    }
  }, [loading]);
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="DetailMain">
      {/* <p> 페이지의 파라미터는 {id} 입니다.</p> */}

      <div className="container1">
        <div className="div1">작성일</div>
        <div className="div2">{now.toLocaleDateString("ko-kr")}</div>
        <div className="div3">작성자</div>
        <div className="div4">
          <input
            value={data?.userFindOne.userName}
            disabled
            // onChange={(e) => setInputUserNum(e.target.value)}
          />
        </div>
      </div>
      <div className="container1">
        <div className="div5">제목</div>
        <div className="div6">
          <input
            value={inputBoardTitle}
            style={{ width: "100%", height: "100%" }}
            onChange={(e) => setInputBoardTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="container2">
        <div className="div9">본문</div>
        <div className="div10">
          <input
            value={inputBoardContents}
            style={{ width: "100%", height: "100%" }}
            onChange={(e) => setInputBoardContents(e.target.value)}
          />
        </div>
      </div>

      <button onClick={AddButton}>등록</button>
    </div>
  );
};

export default BoardPost;
