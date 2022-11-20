import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Main = styled.div`
  height: 100px;
  width: 350px;
`;

const Header = styled.div`
  text-align: center;
  font-size: 1.6rem;
`;

const BtnList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 0.5rem;
  padding-right: 0.5rem;
`;

const Btn = styled.button`
  width: 8rem;
  height: 2.5rem;
  padding: 0;
  border: none;

  background-color: #81c6e8;
  color: white;
  cursor: pointer;
  border-radius: 0.5rem;
`;

const FriendsHeader = () => {
  const navigate = useNavigate();

  // 친구 추가
  const addFriends = async () => {
    const nickname = window.prompt("친구 추가할 사용자 이름을 입력하세요.");
    console.log(nickname);
    try {
      const res = await axios({
        method: "post",
        url: `/api/user/friends/${nickname}`,
      });
      console.log(res);
    } catch (error) {
      const err = error.response.data;
      console.log(err);
    }
  };

  return (
    <Main>
      <Header>친구목록</Header>
      <BtnList>
        <Btn onClick={addFriends}>친구 추가하기</Btn>
        <Btn onClick={() => navigate("/friends/response-list")}>
          친구 요청목록
        </Btn>
      </BtnList>
    </Main>
  );
};

export default FriendsHeader;
