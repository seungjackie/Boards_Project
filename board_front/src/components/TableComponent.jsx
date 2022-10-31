import React from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

// import "../pages/Home.css";

// interface propsType {
//   boardData: {
//     title: string;
//     contents: string;
//     uId_borad: string;
//   };
//   key: number;
//   index: number;
// }

const TableComponent = ({ boardData, key } /* : propsType */) => {
  const naviate = useNavigate();

  const id = boardData?.uId_borad;

  const goToDetail = () => {
    naviate(`/board/${id}`, {
      state: {
        data: boardData,
      },
    });
  };
  console.log(boardData);
  // console.log(boardData?.uId_borad, "board data");
  // console.log(key);

  return (
    <tr onClick={() => goToDetail()}>
      <td>1</td>
      <td>{boardData.title}</td>
      <td>{boardData.contents}</td>
      <td>1 </td>
    </tr>
  );
};

export default TableComponent;
