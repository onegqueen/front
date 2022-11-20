import styled from "styled-components";

const Main = styled.div`
  font-size: 1.4rem;
`;

const Title = styled.div`
  text-align: center;
  font-family: SCDream9;
  font-size: 2rem;
`;

const KeywordTitle = styled.div`
  text-align: center;
  margin-top: 2rem;
`;
const KeywordList = styled.div`
  display: grid;
  padding: 0 2rem;
  margin: 1rem 0;

  grid-template-columns: repeat(3, 100px);
  grid-row-gap: 1rem;
  justify-content: space-between;
`;
const KeywordBtn = styled.button`
  width: 100px;
  height: 30px;
  border: none;

  background-color: #81c6e8;
  color: white;
  cursor: pointer;
  border-radius: 0.5rem;
`;

const SummaryHeader = (props) => {
  const { keyword, setKeyword } = props;

  const selectKeyword = (e, type) => {
    setKeyword(type);
  };

  return (
    <Main>
      <Title>오늘의 요약</Title>
      <KeywordTitle>요약할 영역 : {keyword}</KeywordTitle>
      <KeywordList>
        <KeywordBtn
          name="프론트엔드"
          onClick={(e) => selectKeyword(e, "프론트엔드")}
        >
          프론트엔드
        </KeywordBtn>
        <KeywordBtn onClick={(e) => selectKeyword(e, "백엔드")}>
          백엔드
        </KeywordBtn>
        <KeywordBtn onClick={(e) => selectKeyword(e, "Android")}>
          Android
        </KeywordBtn>
        <KeywordBtn onClick={(e) => selectKeyword(e, "IOS")}>IOS</KeywordBtn>
        <KeywordBtn onClick={(e) => selectKeyword(e, "알고리즘")}>
          알고리즘
        </KeywordBtn>
        <KeywordBtn onClick={(e) => selectKeyword(e, "운영체제")}>
          운영체제
        </KeywordBtn>

        <KeywordBtn onClick={(e) => selectKeyword(e, "Database")}>
          Database
        </KeywordBtn>
        <KeywordBtn onClick={(e) => selectKeyword(e, "C.S")}>C.S</KeywordBtn>
      </KeywordList>
    </Main>
  );
};

export default SummaryHeader;
