import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  width: 20rem;
  margin: 0 auto;

  font-size: 1.4rem;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
`;

const StatName = styled.div`
  width: 6rem;
  margin-left: 1rem;
`;

const StatPoints = styled.div`
  width: 7rem;
`;

const StatBtnList = styled.div`
  display: flex;
  width: 6rem;
  justify-content: space-between;
`;
const StatPlusBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: none;

  background-color: #395b64;
  color: white;
  cursor: pointer;
  border-radius: 0.5rem;
`;
const StatMinusBtn = styled(StatPlusBtn)``;

const ConfirmBtn = styled.button`
  width: 20rem;
  height: 2.5rem;
  padding: 0;
  border: none;
  margin-top: 2rem;

  background-color: #395b64;
  color: white;
  cursor: pointer;
  border-radius: 1rem;
`;

const StatsConfirm = (props) => {
  const navigate = useNavigate();

  const { remainPoints, setRemainPoints } = props;

  const [stats, setStats] = useState({
    water: 0,
    photosynthesis: 0,
    fertilizer: 0,
  });

  const addPoints = (e) => {
    const { name } = e.target;

    if (remainPoints <= 0) {
      alert("더이상 남은 포인트가 없습니다 :>");
    } else {
      setRemainPoints((prev) => prev - 1);
      setStats({ ...stats, [name]: stats[name] + 1 });
    }
  };

  const subPoints = (e) => {
    const { name } = e.target;

    if (stats[name] <= 0) {
      alert("더 이상 뺄 수 없어요! :<");
    } else {
      setRemainPoints((prev) => prev + 1);
      setStats({ ...stats, [name]: stats[name] - 1 });
    }
  };

  return (
    <Main>
      <Stat>
        <StatName>물</StatName>
        <StatPoints>{stats.water}</StatPoints>
        <StatBtnList>
          <StatPlusBtn name="water" onClick={addPoints}>
            +
          </StatPlusBtn>
          <StatMinusBtn name="water" onClick={subPoints}>
            -
          </StatMinusBtn>
        </StatBtnList>
      </Stat>
      <Stat>
        <StatName>광합성</StatName>
        <StatPoints>{stats.photosynthesis}</StatPoints>
        <StatBtnList>
          <StatPlusBtn name="photosynthesis" onClick={addPoints}>
            +
          </StatPlusBtn>
          <StatMinusBtn name="photosynthesis" onClick={subPoints}>
            -
          </StatMinusBtn>
        </StatBtnList>
      </Stat>
      <Stat>
        <StatName>비료</StatName>
        <StatPoints>{stats.fertilizer}</StatPoints>
        <StatBtnList>
          <StatPlusBtn name="fertilizer" onClick={addPoints}>
            +
          </StatPlusBtn>
          <StatMinusBtn name="fertilizer" onClick={subPoints}>
            -
          </StatMinusBtn>
        </StatBtnList>
      </Stat>
      <ConfirmBtn>포인트 확정</ConfirmBtn>
    </Main>
  );
};

export default StatsConfirm;
