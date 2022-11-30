import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import FriendsNotYetList from "../../components/Friends/FriendsNotYetListList";

const Main = styled.div`
  display: flex;
  align-items: center;
  width: 35rem;
  height: calc(100% - 30px);
  margin: 0 auto;
`;
const FriendsNotYet = () => {
  return (
    <Main>
      <FriendsNotYetList />
    </Main>
  );
};

export default FriendsNotYet;
