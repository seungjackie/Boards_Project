import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Home.css";
import { gql, useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { GET_BOARD, POST_BOARD } from "../gql/home.gql";
import { useParams } from "react-router-dom";
import TableComponent from "../components/TableComponent";
import Pagination from "../components/Pagination";
import Searchbar from "../components/Searchbar";

function Home() {
  const { loading, error, data } = useQuery(GET_BOARD);

  // 5개의 게시물로 보여주겠다.
  const [limit, setLimit] = useState(5);
  // 시작 페이지 1
  const [page, setPage] = useState(1);
  // 페이지 -1에서 자르겟다.
  const offset = (page - 1) * limit;

  useEffect(() => {
    // console.log(data);
  }, [data]); // 바뀌는 값 적용

  if (loading) return <Loading />;
  if (error) return <Error />;

  // console.log(setLimit, "<<<<< >>>>>");

  return (
    <div>
      <div className="home_main">
        <Searchbar />
        <div>
          <div className="board_title">게시판</div>
          <div className="board_Add">글 작성</div>
        </div>
        <br />
        <div>
          <label>
            페이지 당 표시할 게시물 수:&nbsp;
            <select
              type="number"
              value={limit} // limit 제한
              onChange={({ target: { value } }) => setLimit(Number(value))}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
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
            {data?.boardAll
              .slice(offset, offset + limit)
              .map((board, index) => {
                return (
                  <TableComponent key={index} index={index} boardData={board} />
                );
              })}
          </tbody>
        </Table>

        <Pagination
          total={data?.boardAll.length === undefined ? 1 : data.boardAll.length}
          // total={data.boardAll.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default Home;
