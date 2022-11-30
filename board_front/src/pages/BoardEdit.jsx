import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { BOARD_EDIT, BOARD_FINDONE } from "../gql/board.gql";
import { USER_USERNUM } from "../gql/user.gql";

const BoardEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  let now = new Date();

  // const loginIdtest = sessionStorage.getItem("loginId");
  // console.log(loginIdtest);

  // 글 수정 state
  const [updatetBoardTitle, setUpdateBoardTitle] = useState("");
  const [updateBoardContents, setUpdatetBoardContents] = useState("");
  const [updateBoardTime, setUpdatetBoardTime] = useState("");

  // 글 등록 데이터 불러오기
  const QueryMultiple = () => {
    const res1 = useQuery(BOARD_FINDONE, {
      variables: { id: parseInt(id) },
    });
    return [res1];
  };

  const [{ data: data1 }] = QueryMultiple();

  // useNum으로 데이터 찾기
  const { loading, error, data } = useQuery(USER_USERNUM, {
    variables: { userNum: data1?.findBoardOne?.userNum },
  });

  // 글 수정하기
  const [BoardEdit] = useMutation(BOARD_EDIT, {
    variables: {
      title: updatetBoardTitle,
      contents: updateBoardContents,
      boardNum: parseInt(id),
      createTime: updateBoardTime,
    },
  });

  // 글 수정 버튼
  const EditButton = async () => {
    const boaredit = await BoardEdit();
    // console.log(a);
    // console.log("inputTitle======", updatetBoardTitle);
    console.log(boaredit, "<<<boaredit");
    window.location.reload();
    alert("수정 되었습니다.");
    navigate("/");
  };

  // 글 수정 리렌더링
  useEffect(() => {
    if (loading) {
      console.log(data1);
    }
  }, [data1, loading]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="DetailMain">
      <div className="container1">
        <div className="div1">작성일</div>
        <div className="div2">
          <input
            style={{ width: "100%", height: "100%" }}
            placeholder={now.toLocaleDateString("ko-kr")}
            onChange={(e) => setUpdatetBoardTime(e.target.value)}
          />
        </div>
        <div className="div3">작성자 </div>
        <div className="div4">{data?.useNumFindOne.userName}</div>
      </div>
      <div className="container1">
        <div className="div5">제목</div>
        <div className="div6">
          <input
            value={updatetBoardTitle}
            placeholder={data1?.findBoardOne.title}
            style={{ width: "100%", height: "100%" }}
            onChange={(e) => setUpdateBoardTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="container2">
        <div className="div9">본문</div>
        <div className="div10">
          <input
            value={updateBoardContents}
            placeholder={data1?.findBoardOne.contents}
            style={{ width: "100%", height: "100%" }}
            onChange={(e) => setUpdatetBoardContents(e.target.value)}
          />
        </div>
      </div>

      <button onClick={EditButton}>등록</button>
    </div>
  );
};

export default BoardEdit;
