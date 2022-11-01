import { useState } from "react";
import styled from "styled-components";
import SummaryHeader from "../../components/Stats/StatsHeader";
import SummaryRemainPoints from "../../components/Stats/StatsRemainPoints";
import SummaryStats from "../../components/Stats/StatsConfirm";

const Main = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 400px;
  height: 600px;
  border: 1px solid black;
`;

const Stats = () => {
  const [points, setPoints] = useState(24);
  const [remainPoints, setRemainPoints] = useState(24);
  return (
    <Main>
      <Content>
        <SummaryHeader points={points} />
        <SummaryRemainPoints remainPoints={remainPoints} />
        <SummaryStats remainPoints={remainPoints} setRemainPoints={setRemainPoints} />
      </Content>
    </Main>
  );
};

export default Stats;
