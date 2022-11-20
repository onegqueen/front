import styled from "styled-components";
import FriendsHeader from "../../components/Friends/FriendsHeader";
import FriendsList from "../../components/Friends/FriendsList";

const Main = styled.div`
  display: flex;
  align-items: center;
  width: 35rem;
  height: calc(100% - 30px);
  margin: 0 auto;
`;

const Content = styled.div`
  border: 1px solid black;
`;

const Friends = () => {
  return (
    <Main>
      <Content>
        <FriendsHeader />
        <FriendsList />
      </Content>
    </Main>
  );
};

export default Friends;
