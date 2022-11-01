import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const TableComponent = ({ boardData, key, index }) => {
  const naviate = useNavigate();
  const [posts, setPosts] = useState([boardData]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

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
