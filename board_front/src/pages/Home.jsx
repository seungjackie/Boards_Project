import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Home.css";
import { gql, useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { BOARD_GET } from "../gql/board.gql";
import { useNavigate, useParams } from "react-router-dom";
import TableComponent from "../components/TableComponent";
import Pagination from "../components/Pagination";
import Searchbar from "../components/Searchbar";
import LabelOption from "../components/LabelOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const { loading, error, data } = useQuery(BOARD_GET); // 개수 제한 index
  const navigate = useNavigate();

  // 5개의 게시물로 보여주겠다.
  const [limit, setLimit] = useState(5);
  // 시작 페이지 1
  const [page, setPage] = useState(1);
  // 페이지 -1에서 자르겟다.
  const offset = (page - 1) * limit;

  // 검색
  const [search, setSearch] = useState("");

  // 검색 함수
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  // 글작성 이동
  const goToPostBoard = () => {
    navigate("/baordpost");
  };

  // title 검색
  const boardTitle = data?.boardAll.filter((board) => {
    return (
      board.title
        .replace(" ", "") // 타이틀 띄어쓰기 방지.
        .toLocaleLowerCase() // 대 소문자 상관 없이 검샘 가능
        // state 값으로 찾기.
        .includes(search.toLocaleLowerCase().replace(" ", ""))
    );
  });

  // 바뀌는 값 적용
  useEffect(() => {
    if (loading) {
      console.log(data);
    }
  }, [data, loading, setLimit]); // 바뀌는 값 적용

  if (loading) return <Loading />;
  if (error) return <Error />;

  // console.log(setLimit, "<<<<< >>>>>");

  return (
    <div>
      <div className="home_main">
        <div>
          <div className="board_title">게시판</div>
        </div>
        <div className="board_second_container">
          <div className="board_Add" onClick={goToPostBoard}>
            글 작성
          </div>
          <div className="search_main">
            <Searchbar search={search} onChange={onChange} />
          </div>
        </div>
        <div className="labeloption_contaiiner">
          <LabelOption limit={limit} setLimit={setLimit} />
        </div>
        <table className="table">
          <thead>
            <tr className="first-tr">
              <th colSpan="7"> board list</th>
            </tr>
            <tr>
              <th colSpan="1">#</th>
              <th colSpan="1">title</th>
              <th colSpan="1">작성자</th>
              <th colSpan="2">작성일</th>
              <th colSpan="1">조회수</th>
              <th colSpan="1"></th>
            </tr>
          </thead>
          <tbody>
            {/*todo */}
            {boardTitle
              .slice(offset, offset + limit)
              .sort((a, b) => b - a)
              .map((board, index) => {
                return (
                  <TableComponent key={index} index={index} boardData={board} />
                );
              })}
          </tbody>
        </table>

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
