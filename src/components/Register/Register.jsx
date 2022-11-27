import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import S from "./styled";

const Register = () => {
  const [nickname, setNickname] = useState("");
  const [checknick, setChecknick] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onNicknameHandler = (event) => {
    setNickname(event.currentTarget.value);
  };

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onPasswordCheckHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  // password 일치여부 확인
  const onCheck = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("비밀번호 확인을 다시 한 번 해주십시오.");
    } else if (password === confirmPassword) {
      return alert("비밀번호가 일치합니다. 회원가입을 진행해주세요.");
    }
  };

  const onNickHandler = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `/auth/${nickname}`,
        data: nickname,
      });
      console.log(res);
      return alert("사용가능한 닉네임입니다.");
    } catch (error) {
      const err = error.response.data;
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const joinUser = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "/api/auth/join",
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
      <S.Input
        type="password"
        placeholder="check password one more"
        value={confirmPassword}
        onChange={onPasswordCheckHandler}
      />
      <S.buttonAlign>
        <S.PasswordCheck onClick={onCheck}>비밀번호 재확인</S.PasswordCheck>

        <S.nickCheck type="button" value={checknick} onClick={onNickHandler}>
          닉네임 중복 체크
        </S.nickCheck>
      </S.buttonAlign>
      <S.SubmitButton type="submit" onClick={joinUser}>
        "Register!"
      </S.SubmitButton>
    </S.Container>
  );
};

export default Register;
