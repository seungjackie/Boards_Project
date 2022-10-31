import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login_main">
      <Form className="login">
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label className="Id_title">ID </Form.Label>
          <Form.Control type="id" placeholder="Enter id" />
          <Form.Text className="text-muted">
            ID를 입력이 필요합니다. Id를 입력 해 주세요.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="Id_title">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="기억 하기" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </div>
  );
};

export default Login;
