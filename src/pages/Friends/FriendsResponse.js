import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import FriendsResponseList from "../../components/Friends/FriendsResponseList";

const Main = styled.div`
  width: 400px;
  height: 500px;
  margin: 0 auto;
`;
const FriendsResponse = () => {
  return (
    <Main>
      <FriendsResponseList />
    </Main>
  );
};

export default FriendsResponse;
