import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { gql, useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { GET_BOARD, GET_USER } from "../gql/home.gql";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { USER_CHECK } from "../gql/user.gql";

const LOG_IN_QUERY = gql`
  query Login($userId: String!, $password: int!) {
    user(userId: $userId, password: $password) {
      jwt
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // console.log("inputId", inputId);
  // console.log("inputPw", inputPw);

  const [login] = useMutation(USER_CHECK, {
    variables: { LoginInputId: inputId, LoginInputPw: inputPw },
  });

  const userCheck = async () => {
    const loginAuth = await login();
    console.log(loginAuth, "<<< 데이터 확이");
    console.log("input ID :" + inputId, "input PW : " + inputPw);
    console.log("login auth :" + loginAuth.data.userCheck);
    if( !loginAuth.data.userCheck)
    navigate("/");
  };

  return (
    <div className="Login_main">
      <form>
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
        <button variant="primary" type="submit" onClick={userCheck}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
