/* eslint-disable array-callback-return */
import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { useQuery } from "@apollo/client";
import Loading from "../components/Loading";
// import Error from "../components/Error";
import { BOARD_GET, BOARD_SEARCHONE } from "../gql/board.gql";
import { useNavigate } from "react-router-dom";
import TableComponent from "../components/TableComponent";
import Pagination from "../components/Pagination";
// import Searchbar from "../components/Searchbar";
import LabelOption from "../components/LabelOption";
import Error from "../components/Error";

function Home({ auth }) {
  const inputRef = useRef("");
  // console.log(inputRef?.current?.value, "<< ref");

  // 5개의 게시물로 보여주겠다.
  const [limit, setLimit] = useState(5);
  // 시작 페이지 1
  const [page, setPage] = useState(1);
  // 페이지 -1에서 자르겟다.
  const offset = (page - 1) * limit;

  // 게시글
  const { loading, error, data } = useQuery(BOARD_GET);
  const navigate = useNavigate();

  // 검색
  const [search, setSearch] = useState("");
  const [searchBool, setSearchBool] = useState(false);
  const { data: searchData } = useQuery(BOARD_SEARCHONE, {
    variables: { keyword: search },
  });

  // 글작성 이동
  const goToPostBoard = () => {
    navigate("/baordpost");
  };

  // client title 검색
  // const boardTitle = data?.boardAll.filter((board) => {
  //   return (
  //     board.title
  //       .replace(" ", "") // 타이틀 띄어쓰기 방지.
  //       .toLocaleLowerCase() // 대 소문자 상관 없이 검샘 가능
  //       // state 값으로 찾기.
  //       .includes(search.toLocaleLowerCase().replace(" ", ""))
  //   );
  // });

  // log out
  const onLogOut = () => {
    sessionStorage.removeItem("loginId");
    navigate("/login");
    console.log("logout");
    console.log(sessionStorage);
  };

  // 검색 버튼
  const handleClick = () => {
    // if (inputRef.current.value === null) {
    //   console.log("아직 검색하지 않음");
    // } else {
    setSearchBool(true);
    console.log("검색 시작");
    setSearch(inputRef.current.value);
    // }
  };

  // 바뀌는 값 적용
  useEffect(() => {
    // 로그인 상태 확인
    if (loading) {
    }
  }, [loading]);

  // if (loading) return <Loading />;
  // if (error) return <Error />;

  return (
    <div>
      <div className="home_main">
        <div>
          <div className="board_title">게시판</div>
        </div>
        <div className="board_second_container">
          {auth ? (
            <>
              <div className="board_Add" onClick={goToPostBoard}>
                글 작성
              </div>
              <button className="logout" onClick={onLogOut}>
                log out
              </button>
            </>
          ) : null}
          <div className="search_main">
            <input
              ref={inputRef}
              type="text"
              autoComplete="off" // 자동 완성 방지
            />
            <button onClick={handleClick}>검색</button>
          </div>
        </div>
        <div className="labeloption_contaiiner">
          {searchBool === false ? (
            <LabelOption limit={limit} setLimit={setLimit} />
          ) : null}
        </div>
        <div>
          <table className="table">
            <>
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
            </>
            <>
              <tbody>
                {searchBool === false
                  ? data?.boardAll
                      // {search.fin?.boardAll
                      .slice(offset, offset + limit)
                      .map((board, index) => {
                        return (
                          <TableComponent
                            key={board.boardNum}
                            index={index}
                            boardData={board}
                          />
                        );
                      })
                  : searchData?.findSearchBoard?.map((board, index) => {
                      return (
                        <TableComponent
                          key={board.boardNum}
                          index={index}
                          boardData={board}
                        />
                      );
                    })}
              </tbody>
            </>
          </table>
        </div>
        {/* 
        {inputRef?.current.value === undefined || "" || null ? (
          <div>없냐?</div>
        ) : (
          searchData?.findSearchBoard?.map((item, index) => {
            return <div key={index}>{item.title}</div>;
          })
        )} */}

        {searchBool === false ? (
          <Pagination
            total={
              data?.boardAll.length === undefined ? 1 : data.boardAll.length
            }
            // total={data.boardAll.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Home;
