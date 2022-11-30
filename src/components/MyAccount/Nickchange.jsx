import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "./styled";
import "./MyAccount";
import "../../utils/settingCookie";

const NickChange = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const onNickHandler = (event) => {
    setNickname(event.currentTarget.value);
  };

  const onchangeNick = async () => {
    navigate("/MyAccount");
    try {
      const res = await axios({
        method: "post",
        url: `/auth/validate/${nickname}`,
        data: nickname,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${"get-access"("accessToken")}`,
        },
      });
      console.log(res);
    } catch (error) {
      const err = error.response.data;
      console.log(err);
    }
  };

  return (
    <S.Container>
      <S.Title>닉네임 변경</S.Title>
      <S.Form>
        <S.Input
          type="text"
          value={nickname}
          placeholder="변경할 닉네임을 입력하세요"
          onChange={onNickHandler}
        ></S.Input>
        <S.nickCheck type="button" onClick={onchangeNick}>
          변경 버튼
        </S.nickCheck>
      </S.Form>
    </S.Container>
  );
};

export default NickChange;
