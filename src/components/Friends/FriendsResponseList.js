import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

const test = [
  {
    name: "길동",
  },
  {
    name: "가나",
  },
  {
    name: "다라",
  },
  {
    name: "마바",
  },
  {
    name: "마바",
  },
  {
    name: "마바",
  },
  {
    name: "마바",
  },
  {
    name: "마바",
  },
  {
    name: "마바",
  },
  {
    name: "마바",
  },
  {
    name: "마바",
  },
  {
    name: "마바",
  },
  {
    name: "마바",
  },
  {
    name: "마바",
  },
  {
    name: "11",
  },
  {
    name: "22",
  },
  {
    name: "33",
  },
];

const Main = styled.div`
  width: 400px;
  height: 150px;
  overflow: auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AcceptBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: none;

  background-color: #81c6e8;
  color: white;
  cursor: pointer;
  border-radius: 0.5rem;
`;
const DeclineBtn = styled(AcceptBtn)`
  background-color: #5da7db;
`;

const FriendsResponseList = () => {
  const [friends, setFriends] = useState(test);
  return (
    <Main>
      {friends.map((data, index) => (
        <Row key={index}>
          <div>
            {" "}
            {index}. {data.name}
          </div>
          <div>
            {" "}
            <AcceptBtn>o</AcceptBtn>
            <DeclineBtn>x</DeclineBtn>
          </div>
        </Row>
      ))}
    </Main>
  );
};

export default FriendsResponseList;
