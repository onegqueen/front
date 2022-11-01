import styled from "styled-components";

const Main = styled.div``;

const RemainPoints = styled.div`
  margin: 10px 0;
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
