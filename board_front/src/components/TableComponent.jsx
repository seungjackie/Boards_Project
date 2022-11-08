import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TableComponent = ({ boardData, index }) => {
  const naviate = useNavigate();

  const buttonA = (event) => {
    event.stopPropagation();
  };

  // console.log(boardData);

  return (
    <tr
      onClick={() =>
        naviate(`/board/${boardData.boardNum}`, { state: { data: boardData } })
      }
    >
      <td colSpan="1"> No. {index + 1}</td>
      <td colSpan="1">{boardData.title}</td>
      <td colSpan="2">{boardData.userNum}</td>
      <td colSpan="1">{boardData.createTime.slice(0, -14)} </td>
      <td colSpan="1">{boardData.cnt}</td>
      <td className="last-child" onClick={(event) => buttonA(event)}>
        <FontAwesomeIcon icon={faPen} className="Home_icon_margin" />
        <FontAwesomeIcon icon={faTrash} className="Home_icon_margin" />
      </td>
    </tr>
  );
};

export default TableComponent;
