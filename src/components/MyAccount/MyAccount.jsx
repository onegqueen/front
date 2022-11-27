import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import S from "./styled";
import Timer from "../MyAccount/Timer/Timer";
import "./Nickchange";

const MyAccount = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");

  // 닉네임 변경 페이지
  const navigateTochangeNick = () => {
    navigate("/Nickchange");
  };

  return (
    <div>
      <S.logout type="button">로그아웃</S.logout>
      <S.nickCheck type="button" onClick={navigateTochangeNick}>
        닉네임 변경
      </S.nickCheck>
      <Timer />
    </div>
  );
};

export default MyAccount;
