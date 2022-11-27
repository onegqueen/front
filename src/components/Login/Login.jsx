import S from "./styled";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //아이디
  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  //비밀번호
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate("/MyAccount");
      return alert("Login Success");
    }
  };

  // 로그인
  const login = async () => {
    //navigate("/MyAccount");
    try {
      const res = await axios({
        method: "post",
        url: "/api/auth",
        data: {
          id: id,
          pw: password,
        },
      });
      console.log(res);

      const cookie = new Cookies();
      cookie.set("accessToken", res.data.accessToken);
      cookie.set("refreshToken", res.data.refreshToken);
      return alert("로그인 되었습니다");
    } catch (error) {
      const err = error.response.data;
      console.log(err);
    }
  };

  // 회원가입 링크
  const navigateToRegister = () => {
    navigate("/Register");
  };

  console.log(id, password);

  return (
    <S.Container>
      <S.Title>Login Page</S.Title>
      <S.Form>
        <S.Form2>
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
            onKeyPress={handleOnKeyPress}
            placeholder="비밀번호"
          />
          <div>
            <S.LoginButton type="submit" onClick={login}>
              Login
            </S.LoginButton>
          </div>
        </S.Form2>
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
