import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useNavigate, useParams } from "react-router-dom";
import Pagination from "./Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { BOARD_DELETE, BOARD_FINDONE } from "../gql/board.gql";
import { USER_ONE, USER_USERNUM } from "../gql/user.gql";
import Loading from "./Loading";
import Error from "./Error";

const TableComponent = ({ boardData }) => {
  const navigate = useNavigate();

  const [count, setCount] = useState(1);

  // const {id} = useParams()

  const [BoardDeleteOne] = useMutation(BOARD_DELETE, {
    variables: { id: parseInt(boardData.boardNum) },
  });

  const { loading, error, data } = useQuery(USER_USERNUM, {
    variables: { userNum: boardData.userNum },
  });

  const goToEdit = (event) => {
    event.stopPropagation();
    // console.log("edit");
    if (data?.useNumFindOne?.userId === sessionStorage.getItem("loginId")) {
      navigate(`/edit/${parseInt(boardData.boardNum)}`);
    } else {
      alert("수정할수 없는 권한 입니다. ");
    }
  };

  const goToDelete = async (event) => {
    event.stopPropagation();
    // console.log("del");
    alert("삭제 되었습니다.");
    if (data?.useNumFindOne?.userId === sessionStorage.getItem("loginId")) {
      await BoardDeleteOne();
      navigate("/");
    } else {
      alert("수정할수 없는 권한 입니다. ");
    }
  };

  // console.log(sessionStorage.getItem("loginId"));

  useEffect(() => {
    setCount(count + 1);
  }, [data, boardData]);
  // console.log(boardData.index, "<<< lenth");

  if (loading) return <Loading />;
  if (error) return <Error />;
  // {data?.useNumFindOne?.userId === sessionStorage.getItem("loginId") ? (

  return (
    <tr
      onClick={() =>
        navigate(
          `/board/${boardData.boardNum}` /* , { state: { data: boardData } } */
        )
      }
    >
      <td colSpan="1">{/* No.{index + 1} */}*</td>
      <td colSpan="1">{boardData.title}</td>
      <td colSpan="2">{data?.useNumFindOne?.userName}</td>
      <td colSpan="1">{boardData.createTime.slice(0, -14)} </td>
      <td colSpan="1">{boardData.cnt}</td>
      <td className="last-child">
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
      </td>
    </tr>
  );
};

export default TableComponent;
