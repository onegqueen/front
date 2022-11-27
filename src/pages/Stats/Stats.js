import { useState } from "react";
import styled from "styled-components";

import "../../App.css";

import SummaryHeader from "../../components/Stats/StatsHeader";
import SummaryRemainPoints from "../../components/Stats/StatsRemainPoints";
import SummaryStats from "../../components/Stats/StatsConfirm";
import StatsFlower from "../../components/Stats/StatsFlower";

const Main = styled.div`
  display: flex;
  height: calc(100% - 30px);
  justify-content: center;
  align-items: center;

  font-family: SCDream5;
`;

const Content = styled.div`
  width: 40rem;
  padding: 2rem 0;
  border: 0.3rem solid #395b64;
  border-radius: 2rem;
`;

const Stats = () => {
  const [points, setPoints] = useState(24);
  const [remainPoints, setRemainPoints] = useState(24);
  return (
    <Main>
      <Content>
        <SummaryHeader points={points} />
        <StatsFlower />
        <SummaryRemainPoints remainPoints={remainPoints} />
        <SummaryStats
          remainPoints={remainPoints}
          setRemainPoints={setRemainPoints}
        />
      </Content>
    </Main>
  );
};

export default Stats;
