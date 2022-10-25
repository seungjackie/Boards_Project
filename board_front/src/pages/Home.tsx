import React from "react";
import Table from 'react-bootstrap/Table';
import "./Home.css"
import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";



const GET_MOVIE = gql`
query {
  movies {
    id
    name
  }
}
`;

function Home() {

  // const { loading, error, data } = useQuery<IMoviesData>(GET_MOVIE);

  const naviate = useNavigate();

  const goToDetail = () => {
    naviate(`/detail`)
  }




  return (
    <div>
      <div className="home_main">
        <div>
          <div className="board_title">게시판</div>
          <div className="board_Add">글 작성</div>
          <div> </div>
        </div>
      <Table striped bordered hover className="board_read">
        <thead>
          <tr>
            <th>#</th>
            <th>who ?</th>
            <th>board </th>
            <th>cnt (조회수)</th>
          </tr>
        </thead>
        <tbody onClick={goToDetail}>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
      </div>
    </div>
  );
}

export default Home;