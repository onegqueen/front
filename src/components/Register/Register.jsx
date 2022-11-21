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

  const onSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("비밀번호 확인을 다시 한 번 해주십시오.");
    }
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
      <S.SubmitButton type="button" onChange={onSubmit}>
        "Register!"
      </S.SubmitButton>
    </S.Container>
  );
};

export default Register;
