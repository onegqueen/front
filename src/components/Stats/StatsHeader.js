import styled from "styled-components";

const Main = styled.div``;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-family: SCDream9;
`;

const StatsHeader = (prop) => {
  const { points } = prop;

  return (
    <Main>
      <Header>이경훈님의 획득 포인트 : {points}</Header>
    </Main>
  );
};

export default StatsHeader;
