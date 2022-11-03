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

  const selectKeyword = (e) => {
    const { name } = e.target;
    setKeyword(name);
  };

  return (
    <Main>
      <Title>오늘의 요약</Title>
      <KeywordTitle>요약할 영역 : {keyword}</KeywordTitle>
      <KeywordList>
        <KeywordBtn name="프론트엔드" onClick={selectKeyword}>
          프론트엔드
        </KeywordBtn>
        <KeywordBtn name="백엔드" onClick={selectKeyword}>
          백엔드
        </KeywordBtn>
        <KeywordBtn name="알고리즘" onClick={selectKeyword}>
          알고리즘
        </KeywordBtn>
        <KeywordBtn name="운영체제" onClick={selectKeyword}>
          운영체제
        </KeywordBtn>
        <KeywordBtn name="Android" onClick={selectKeyword}>
          Android
        </KeywordBtn>
        <KeywordBtn name="IOS" onClick={selectKeyword}>
          IOS
        </KeywordBtn>
        <KeywordBtn name="Database" onClick={selectKeyword}>
          Database
        </KeywordBtn>
        <KeywordBtn name="C.S" onClick={selectKeyword}>
          C.S
        </KeywordBtn>
      </KeywordList>
    </Main>
  );
};

export default SummaryHeader;
