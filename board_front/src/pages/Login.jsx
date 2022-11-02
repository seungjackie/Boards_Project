import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { gql, useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { GET_BOARD, GET_USER } from "../gql/home.gql";
import Error from "../components/Error";
import Loading from "../components/Loading";

const LOG_IN_QUERY = gql`
  query Login($userId: String!, $password: int!) {
    user(userId: $userId, password: $password) {
      jwt
    }
  }
`;

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  // const {data} = useQuery(USER_CHECK);

  // console.log("inputId", inputId);
  // console.log("inputPw", inputPw);
  const userCheck = () => {
    console.log(inputId, inputPw);
  };

  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <Loading />;
  if (error) return <Error />;

  // console.log(data);

  const filterId = data.userAll.find((user) => user.userId === "qkrtmdwo");
  // console.log(filterId);

  const loginClick = () => {
    console.log();
  };

  return (
    <div
      className="Login_main"
      onSubmit={(e) => {
        loginClick(e);
      }}
    >
      <form onSubmit={userCheck}>
        <div>ID</div>
        <input
          type="id"
          placeholder="아이디를 입력하세요"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
        />
        <div>Password</div>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={inputPw}
          onChange={(e) => setInputPw(e.target.value)}
        />
        <button variant="primary" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
