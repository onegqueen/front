import React from "react";
import { Link } from "react-router-dom";
import S from "./styled";

const Register = () => {
  return (
    <S.Container>
      <S.Input type="text" placeholder="nickname" />
      <S.Input type="text" placeholder="status" />
    </S.Container>
  );
};

export default Register;
