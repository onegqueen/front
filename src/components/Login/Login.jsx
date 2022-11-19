import S from "./styled";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  //아이디
  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };

  //비밀번호
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  //로그인
  const navigate = useNavigate();
  const navigateToAccount = () => {
    navigate("/MyAccount");
    return alert("Login Success !!");
  };

  // 회원가입 페이지 이동
  const navigate1 = useNavigate();
  const navigateToRegister = () => {
    navigate1("/Register");
  };

  return (
    <S.Container>
      <S.Title>Login Page</S.Title>
      <S.Form>
        <S.Input
          type="text"
          value={id}
          onChange={onIdHandler}
          placeholder="아이디"
        />
        <S.Input
          type="password"
          value={password}
          onChange={onPasswordHandler}
          placeholder="비밀번호"
        />
        <div>
          <S.LoginButton type="submit" onClick={navigateToAccount}>
            Login
          </S.LoginButton>
        </div>
        <div>
          <S.snsLogin>Google</S.snsLogin>
          <S.snsLogin>KaKao</S.snsLogin>
        </div>
      </S.Form>
      <S.RegisterButton onClick={navigateToRegister}>
        "Link for Register"
      </S.RegisterButton>
    </S.Container>
  );
};

export default Login;
