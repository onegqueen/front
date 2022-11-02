import styled from "styled-components";

const Main = styled.div``;

const Header = styled.div`
  text-align: center;
  margin: 10px 0;
`;

const StatsHeader = (prop) => {
  const { points } = prop;

  return (
    <Main>
      <Header>***님의 획득 포인트 : {points}</Header>
    </Main>
  );
};

export default StatsHeader;
