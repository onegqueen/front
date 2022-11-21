import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import S from "./styled";

const Register = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
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

  const onCheck = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("비밀번호를 다시 한 번 확인 해주십시오.");
    } else if (password === confirmPassword) {
      return alert("비밀번호가 일치합니다. 회원가입을 진행해주세요.");
    }
  };

  //회원가입 후 로그인 페이지 이동
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/Login");
    return alert("Register Success !!");
  };

  return (
    <S.Container>
      <S.Input
        type="text"
        value={name}
        onChange={onNameHandler}
        placeholder="name"
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
        onChange={onPasswordHandler}
      />
      <S.PasswordCheck onClick={onCheck}>비밀번호 재확인</S.PasswordCheck>
      <S.SubmitButton type="submit" onClick={navigateToLogin}>
        "Register!"
      </S.SubmitButton>
    </S.Container>
  );
};

export default Register;
