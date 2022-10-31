import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./Home.css";
import { gql, useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { GET_BOARD, POST_BOARD } from "../gql/home.gql";
import { useParams } from "react-router-dom";
import TableComponent from "../components/TableComponent";
import BoardDetail from "./BoardDetail";

function Home() {
  const { loading, error, data } = useQuery(GET_BOARD);

  useEffect(() => {
    console.log(data);
  }, [data]); // 바뀌는 값 적용

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <div className="home_main">
        <div>
          <div className="board_title">게시판</div>
          <div className="board_Add">글 작성</div>
        </div>
        <Table striped bordered hover className="board_read">
          <thead>
            <tr>
              <th>#</th>
              <th>title </th>
              <th>내용 </th>
              <th>cnt (조회수)</th>
            </tr>
          </thead>
          <tbody>
            {data?.boardAll.map((board /* : any */, index /* : number */) => {
              return <TableComponent key={index} boardData={board} index={0} />;
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Home;
