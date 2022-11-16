import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { gql, useMutation, useQuery, useLazyQuery } from "@apollo/client";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { USER_CHECK } from "../gql/user.gql";

const Login = ({ auth }) => {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 로그인 시 세션 남기기
  let sessionStorage = window.sessionStorage;

  // console.log("inputId", inputId);
  // console.log("inputPw", inputPw);

  const [login] = useMutation(USER_CHECK, {
    variables: { LoginInputId: inputId, LoginInputPw: inputPw },
  });

  const chekOnUser = async () => {
    const loginAuth = await login();
    console.log(loginAuth, "<<< 데이터 확인");
    console.log("input ID :" + inputId, "input PW : " + inputPw);
    console.log("login auth :" + loginAuth.data.userCheck);
    console.log(JSON.stringify(sessionStorage), "asdfnjsadfnjfds ");
    sessionStorage.setItem("loginId", inputId);
    if (loginAuth.data.userCheck) {
      // auth(true);
      navigate("/");
      window.location.reload();
    } else alert("아이디와 비밀번호를 다시 입력하세요.");
  };

  // console.log(sessionStorage);

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
        <button variant="primary" type="submit" onClick={chekOnUser}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
