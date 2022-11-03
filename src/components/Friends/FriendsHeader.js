import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Main = styled.div``;

const Header = styled.div`
  text-align: center;
`;

const BtnList = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AddBtn = styled.button``;
const InviteBtn = styled.button``;

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
        <AddBtn onClick={addFriends}>친구 추가하기</AddBtn>
        <InviteBtn onClick={() => navigate("/friends/response-list")}>
          친구 요청목록
        </InviteBtn>
      </BtnList>
    </Main>
  );
};

export default FriendsHeader;
