import styled from "styled-components";

const Main = styled.div`
  font-size: 1.4rem;
`;

const RemainPoints = styled.div`
  margin: 1rem 0;
  text-align: center;
`;

const StatsRemainPoints = (props) => {
  const { remainPoints } = props;

  return (
    <Main>
      <RemainPoints>사용 가능 포인트 : {remainPoints}</RemainPoints>
    </Main>
  );
};

export default StatsRemainPoints;
