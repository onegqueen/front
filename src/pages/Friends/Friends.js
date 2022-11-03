import styled from "styled-components";
import FriendsHeader from "../../components/Friends/FriendsHeader";
import FriendsList from "../../components/Friends/FriendsList";

const Main = styled.div`
  width: 300px;
  height: 250px;
  margin: 0 auto;
`;

const Header = styled.div`
  height: 100px;
`;

const Content = styled.div`
  height: 150px;
`;

const Friends = () => {
  return (
    <Main>
      <Header>
        <FriendsHeader />
      </Header>
      <Content>
        <FriendsList />
      </Content>
    </Main>
  );
};

export default Friends;
