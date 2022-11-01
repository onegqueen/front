import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  width: 200px;
  margin: 0 auto;
`;

const Stat = styled.div`
  display: flex;
`;

const StatName = styled.div`
  width: 60px;
  margin-left: 10px;
`;

const StatPoints = styled.div`
  width: 70px;
`;

const StatBtnList = styled.div`
  display: flex;
  width: 60px;
  justify-content: space-between;
`;
const StatBtn = styled.button``;

const ConfirmBtn = styled.button`
  width: 200px;
  margin-top: 20px;
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
          <StatBtn name="water" onClick={addPoints}>
            +
          </StatBtn>
          <StatBtn name="water" onClick={subPoints}>
            -
          </StatBtn>
        </StatBtnList>
      </Stat>
      <Stat>
        <StatName>광합성</StatName>
        <StatPoints>{stats.photosynthesis}</StatPoints>
        <StatBtnList>
          <StatBtn name="photosynthesis" onClick={addPoints}>
            +
          </StatBtn>
          <StatBtn name="photosynthesis" onClick={subPoints}>
            -
          </StatBtn>
        </StatBtnList>
      </Stat>
      <Stat>
        <StatName>비료</StatName>
        <StatPoints>{stats.fertilizer}</StatPoints>
        <StatBtnList>
          <StatBtn name="fertilizer" onClick={addPoints}>
            +
          </StatBtn>
          <StatBtn name="fertilizer" onClick={subPoints}>
            -
          </StatBtn>
        </StatBtnList>
      </Stat>
      <ConfirmBtn onClick={() => navigate("/summary")}>포인트 확정 및 요약하러가기</ConfirmBtn>
    </Main>
  );
};

export default StatsConfirm;
