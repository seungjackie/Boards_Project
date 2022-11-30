import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { BOARD_DELETE, BOARD_FINDONE } from "../gql/board.gql";
import "./BoardDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { USER_USERNUM } from "../gql/user.gql";

const BoardDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  // test multiple query
  const QueryMultiple = () => {
    const res1 = useQuery(BOARD_FINDONE, {
      variables: { id: parseInt(id) },
    });
    const res2 = useQuery(USER_USERNUM, {
      variables: { userNum: "U000001" },
    });

    return [res1, res2];
  };

  // multiple query 불러오기
  const [{ data: data1 }] = QueryMultiple();

  // userNum으로 데이터 찾기
  const { loading, error, data } = useQuery(USER_USERNUM, {
    variables: { userNum: data1?.findBoardOne.userNum },
  });

  // delete Mutation
  const [BoardDeleteOne] = useMutation(BOARD_DELETE, {
    variables: { id: parseInt(data1?.boardNum) },
  });

  // edit 이동
  const goToEdit = (event) => {
    event.stopPropagation();
    // console.log("edit");
    navigate(`/edit/${parseInt(data1?.findBoardOne.boardNum)}`);
  };

  // console.log(data1?.findBoardOne.boardNum, " 데이터 확인");

  // console.log(data1, ":ASDFsdafkjnn><<>>");

  // 삭제
  const goToDelete = async (event) => {
    event.stopPropagation();
    // console.log("del");
    alert("삭제 되었습니다.");
    await BoardDeleteOne();
    window.location.reload();
    navigate("/");
  };

  // console.log(data, "<<<<<<<<<<");

  // console.log(data1?.findBoardOne.userNum, "asdfnjsdfn j");
  // console.log(data2, "data 2");

  // const { loading, error, data } = useQuery(BOARD_FINDONE, {
  //   variables: { id: parseInt(id) },
  // });

  // const result = useQueries([
  //   {
  //     queryKey: BOARD_FINDONE,
  //     variables: { id: parseInt(id) },
  //   },
  // ]);

  // console.log(data3, ",,,, data3");

  useEffect(() => {
    if (!loading) {
      // console.log(data, "data<<");
      // console.log(data, "asdfnjsdfn j");
    }
  }, [data, loading]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="DetailMain">
      {data?.useNumFindOne?.userId === sessionStorage.getItem("loginId") ? (
        <>
          <FontAwesomeIcon
            icon={faPen}
            className="Home_icon_margin"
            onClick={(event) => goToEdit(event)}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="Home_icon_margin"
            onClick={(event) => goToDelete(event)}
          />
        </>
      ) : null}
      <div className="container1">
        <div className="div1">작성일</div>
        <div className="div2">
          {data1.findBoardOne.createTime.slice(0, -14)}
        </div>
        <div className="div3">작성자</div>
        <div className="div4">{data.useNumFindOne.userName}</div>
      </div>
      <div className="container1">
        <div className="div5">제목</div>
        <div className="div6">
          <h1>{data1.findBoardOne.title}</h1>
        </div>
      </div>
      <div className="container2">
        <div className="div9">본문</div>
        <div className="div10">
          <h1>{data1.findBoardOne.contents}</h1>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
