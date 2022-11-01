import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_BOARD, GET_USER } from "../gql/home.gql";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import Pagination from "../components/Pagination";

const Test = () => {
  const { data } = useQuery(GET_BOARD);
  // const { user } = useQuery(GET_USER);

  // const [posts, setPosts] = useState({ data });
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  // console.log(data?.boardAll.map((item) => item));
  // console.log(data?.boardAll);

  useEffect(() => {
    // console.log(data, "booooard");
  }, [data]);

  const dataTest = data?.boardAll.map((item) => item.boardNum);
  // console.log(dataTest, "<<<<<<");
  // console.log(data.length, "<<<<<<<<<<<<<<<<<<<<<<<<<<");
  // console.log(data.boardAll.length, "<<<<<<<<<<<<<<<<<<<<<<<<<<");
  // console.log(data, "><<data");

  return (
    <div>
      <header>
        <h1>게시물 목록</h1>
      </header>

      <div>
        <label>
          페이지 당 표시할 게시물 수:&nbsp;
          <select
            type="number"
            value={limit}
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

      <main>
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
              .map(({ item, index }) => (
                <tr key={index}>
                  {/* <td>1</td>
                  <td>222</td>
                  <td>333</td> */}
                </tr>
                // <tr>
                //   <td> No. {index + 1}</td>
                //   <td>{item.title}</td>
                //   <td>{item.contents}</td>
                //   <td>1 </td>
                // </tr>
              ))}
          </tbody>
          <tbody>
            {data?.boardAll.slice(offset, offset + limit).map((item) => (
              <tr>
                <td>{item.title}</td>
                <td>{item.contents}</td>
                <td>1 </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>

      <footer>
        <Pagination
          total={data?.boardAll.length === undefined ? 1 : data.boardAll.length}
          // total={data.boardAll.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </div>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

export default Test;
