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
            <button>o</button>
            <button>x</button>
          </div>
        </Row>
      ))}
    </Main>
  );
};

export default FriendsResponseList;
