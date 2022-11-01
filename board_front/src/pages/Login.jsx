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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <Loading />;
  if (error) return <Error />;

  console.log(data);

  const filterId = data.userAll.find((user) => user.userId === "qkrtmdwo");
  console.log(filterId);

  const loginClick = () => {
    console.log();
  };

  console.log(email, password);

  return (
    <div
      className="Login_main"
      onSubmit={(e) => {
        loginClick(e);
      }}
    >
      {/* Input box to input email */}
      <input value={email} onChange={(event) => setEmail(event.target.value)} />
      {/* Input box to input password */}
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {/* Button to log in */}
      <button onClick={() => loginClick({ variables: { email, password } })}>
        Log in
      </button>
    </div>
  );
};

export default Login;
