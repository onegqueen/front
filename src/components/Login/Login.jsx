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
          <S.LoginButton>
            <button>Login</button>
          </S.LoginButton>
        </div>
        <div>
          <S.snsLogin>
            <button>Google</button>
          </S.snsLogin>
          <S.snsLogin>
            <button>Naver</button>
          </S.snsLogin>
          <S.snsLogin>
            <button>KaKao</button>
          </S.snsLogin>
        </div>
      </S.Form>
      <S.RegisterButton>
        <Link to={"/register"}>"Link for Register"</Link>
      </S.RegisterButton>
    </S.Container>
  );
};

export default Login;
