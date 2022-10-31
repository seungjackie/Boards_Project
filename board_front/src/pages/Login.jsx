import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { gql, useMutation, useQuery, useLazyQuery } from "@apollo/client";

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

  const [login, { loading, error, data }] = useLazyQuery(LOG_IN_QUERY);

  return (
    <div className="Login_main">
      {/* Input box to input email */}
      <input value={email} onChange={(event) => setEmail(event.target.value)} />
      {/* Input box to input password */}
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {/* Button to log in */}
      <button onClick={() => login({ variables: { email, password } })}>
        Log in
      </button>
    </div>
  );
};

export default Login;
