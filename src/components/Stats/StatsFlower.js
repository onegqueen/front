import styled from "styled-components";

const Main = styled.div`
  text-align: center;
  font-size: 1.2rem;
`;

const FlowerCondition = styled.div`
  margin-bottom: 1rem;
`;

const FlowerImg = styled.img.attrs(() => ({
  src: "/img/flower/flowerpot.png",
}))`
  width: 5rem;
  height: 5rem;
`;

const StatsFlower = () => {
  return (
    <Main>
      <FlowerCondition>현재 상태</FlowerCondition>
      <FlowerImg />
    </Main>
  );
};

export default StatsFlower;
