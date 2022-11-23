import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import S from "./styled";

const Register = () => {
  const [nickname, setNickname] = useState("");
  const [checknick, setChecknick] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onNicknameHandler = (event) => {
    setNickname(event.currentTarget.value);
  };

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  //회원가입 후 로그인 페이지 이동
  const navigate = useNavigate();

  const joinUser = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "/apis/auth/join",
        data: {
          id,
          pw: password,
          nickname,
        },
      });
      console.log(res);
      navigate("/Login");
      return alert("Successs Login!");
    } catch (error) {
      const err = error.response.data;
      console.log(err);
    }
  };

  return (
    <S.Container>
      <S.Title>Register Page</S.Title>
      <S.Input
        type="text"
        value={nickname}
        onChange={onNicknameHandler}
        placeholder="Nickname"
      />

      <S.Input type="text" placeholder="id" value={id} onChange={onIdHandler} />
      <S.Input
        type="password"
        placeholder="password"
        value={password}
        onChange={onPasswordHandler}
      />

      <S.SubmitButton type="submit" onClick={joinUser}>
        "Register!"
      </S.SubmitButton>
    </S.Container>
  );
};

export default Register;
