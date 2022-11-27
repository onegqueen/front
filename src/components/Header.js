import styled from "styled-components";
import { Link } from "react-router-dom";

const Headerbar = styled.div`
  background-color:#2C3333;
  display: flex;
  flex-direction: row;
  justify-content: space-around ;
  flex-wrap: wrap;
  align-content: center;

  height: 30px;
`;

export default function Header() {
  return (
    <Headerbar className="header">
      <h1>
        <Link to="/board"> 게시판 </Link>
        <Link to="/rank"> 랭킹 </Link>
        <Link to="/summary"> summary </Link>
        <Link to="/stats"> 꽃키우기 </Link>
        <Link to="/Login"> 로그인 </Link>
      </h1>
    </Headerbar>
  );
}
