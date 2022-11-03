import React from "react";
import S from "./styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  return (
    <S.Container>
      <S.Title>Login Page</S.Title>
      <S.Form>
        <S.Input type="text" placeholder="아이디" />
        <S.Input type="password" placeholder="비밀번호" />
        <div>
          <S.LoginButton>Login</S.LoginButton>
        </div>
        <div>
          <S.snsLogin>Google</S.snsLogin>
          <S.snsLogin>Naver</S.snsLogin>
          <S.snsLogin>KaKao</S.snsLogin>
        </div>
      </S.Form>
      <S.RegisterButton>
        <Link to={"/register"}>"Link for Register"</Link>
      </S.RegisterButton>
    </S.Container>
  );
};

export default Login;
