import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

const test = [
  {
    name: "길동",
    time: "7hrs",
  },
  {
    name: "가나",
    time: "6hrs",
  },
  {
    name: "다라",
    time: "6hrs",
  },
  {
    name: "마바",
    time: "7hrs",
  },
  {
    name: "마바",
    time: "7hrs",
  },
  {
    name: "마바",
    time: "7hrs",
  },
  {
    name: "마바",
    time: "7hrs",
  },
  {
    name: "마바",
    time: "7hrs",
  },
  {
    name: "마바",
    time: "7hrs",
  },
  {
    name: "마바",
    time: "7hrs",
  },
  {
    name: "마바",
    time: "7hrs",
  },
  {
    name: "마바",
    time: "7hrs",
  },
  {
    name: "마바",
    time: "7hrs",
  },
  {
    name: "마바",
    time: "7hrs",
  },
  {
    name: "11",
    time: "7hrs",
  },
  {
    name: "22",
    time: "7hrs",
  },
  {
    name: "33",
    time: "7hrs",
  },
];

const Main = styled.div``;

const Wrapper = styled.div`
  width: 350px;
  height: 250px;
  overflow: auto;
`;

const FriendHeader = styled.div`
  height: 3rem;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 50px;
  border-bottom: 1px solid black;
  text-align: center;
  align-items: center;
`;
const RankTitle = styled.div``;
const NameTitle = styled.div``;
const TimeTitle = styled.div``;
const DetailTitle = styled.div`
  text-align: right;
  padding-right: 0.5rem;
`;

const Friend = styled.div`
  height: 3rem;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr 2fr 50px;
  border-bottom: 1px solid gray;
  text-align: center;
`;
const Rank = styled.div``;
const Name = styled.div``;
const Time = styled.div``;
const Detail = styled.div`
  text-align: right;
  padding-right: 0.5rem;
`;
const DetailBtn = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: #81c6e8;
  color: white;
  cursor: pointer;
  border-radius: 0.5rem;
`;

const Page = styled.div`
  display: grid;
  width: 15rem;
  height: 3rem;
  align-items: center;
  margin: 0 auto;
  grid-template-columns: repeat(8, 1fr);
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
      <Wrapper>
        <FriendHeader>
          <RankTitle>순위</RankTitle>
          <NameTitle>이름</NameTitle>
          <TimeTitle>공부 시간</TimeTitle>
          <DetailTitle>자세히</DetailTitle>
        </FriendHeader>
        {friends.map((data, index) => (
          <Friend key={index}>
            <Rank>{index}.</Rank>
            <Name>{data.name}</Name>
            <Time>{data.time}</Time>
            <Detail>
              <DetailBtn>+</DetailBtn>
            </Detail>
          </Friend>
        ))}
      </Wrapper>
      <Page>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </Page>
    </Main>
  );
};

export default FriendsList;
