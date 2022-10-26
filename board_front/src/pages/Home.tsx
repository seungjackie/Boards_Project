import React from "react";
import Table from "react-bootstrap/Table";
import "./Home.css";
import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { GET_BOARD, POST_MEMBER } from "../gql/home.gql";
import { useParams } from "react-router-dom";

function Home() {
  let { params } = useParams();

  const naviate = useNavigate();

  const goToDetail = () => {
    naviate(`/board/:id`);
  };

  const { loading, error, data } = useQuery(GET_BOARD);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!(</p>;

  return (
    <div>
      <div className="home_main">
        <p> 현재 페이지 파라미터는 {params} 입니다.</p>
        <div>
          <div className="board_title">게시판</div>
          <div className="board_Add">글 작성</div>
          <div> </div>
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
          {data.boardAll.map((board: any, index: any) => (
            <tbody onClick={goToDetail} key={index}>
              <tr>
                {/* 타입추가 */}
                <td>{index + 1}</td>
                <td>{board.title}</td>
                <td>{board.contents}</td>
                <td>0</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default Home;
