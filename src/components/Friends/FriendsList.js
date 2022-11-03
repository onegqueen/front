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

const FriendsList = () => {
  const [friends, setFriends] = useState(test);

  const getFriends = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "/api/user/friends",
      });
      console.log(res);
    } catch (error) {
      const err = error.response.data;
      console.log(err);
    }
  };

  return (
    <Main>
      {friends.map((data, index) => (
        <div key={index}>
          {index}. {data.name}
        </div>
      ))}
    </Main>
  );
};

export default FriendsList;
