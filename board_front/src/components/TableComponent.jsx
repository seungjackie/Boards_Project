import React from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const TableComponent = ({ boardData, key, index }) => {
  const naviate = useNavigate();

  // console.log(key);
  // console.log(index);
  console.log(boardData.index, "<<<<<<<<<<< index");
  console.log(index, "<<<<<<<<inininin");
  console.log(boardData.length, "snjnjn");

  const id = boardData?.uId_borad;

  const goToDetail = () => {
    naviate(`/board/${id}`, {
      state: {
        data: boardData,
      },
    });
  };
  console.log(boardData);

  return (
    <tr onClick={() => goToDetail()}>
      <td> No. {index + 1}</td>
      <td>{boardData.title}</td>
      <td>{boardData.contents}</td>
      <td>1 </td>
    </tr>
  );
};

export default TableComponent;
