import React, { useState, useRef } from "react";
import { useQuery } from "@apollo/client";
import { BOARD_SEARCHONE } from "../gql/board.gql";

const Test = () => {
  // const navigate = useNavigate();
  // const { boardNum } = useParams();
  // const { loading, error, data } = useQuery(USER_USERNUM, {
  // const { data } = useQuery(USER_USERNUM, {
  //   variables: { userNum: "U000001" },
  // });

  // const QueryMultiple = () => {
  //   const res1 = useQuery(USER_USERNUM, {
  //     variables: { userNum: "U000001" },
  //   });
  //   const res2 = useQuery(BOARD_FINDONE, {
  //     variables: { id: 52 },
  //   });
  //   return [res1, res2];
  // };

  // const [{ data: data1 }, { data: data2 }] = QueryMultiple();

  // const { data } = useQuery(BOARD_FINDONE, {
  //   variables: { id: 52 },
  // });

  const inputRef = useRef(null);

  const [message, setMessage] = useState("");

  const { data: searchData } = useQuery(BOARD_SEARCHONE, {
    variables: { keyword: message },
  });

  const handleClick = (e) => {
    e.preventDefault(); //새로고침 방지
    setMessage(inputRef.current.value);
    console.log("handleClick 👉️", message);
    console.log(inputRef.current.value);
    console.log(searchData?.findSearchBoard, "<< data");
  };

  // if (loading) return <Loading />;
  // if (error) return <Error />;

  // console.log(data);

  // console.log(data.boardAll[0].boardNum);

  // const dataCol = data.boardAll[0].boardNum;

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        // id="message"
        // name="message"
        autoComplete="off"
      />
      <button onClick={handleClick}>확인 </button>
      {searchData?.findSearchBoard.map((item) => {
        return item.title;
      })}
    </div>
  );
};

export default Test;
