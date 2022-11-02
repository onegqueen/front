import styled from "styled-components";

const Main = styled.div``;

const Title = styled.div`
  text-align: center;
`;

const KeywordTitle = styled.div`
  text-align: center;
`;
const KeywordList = styled.div``;
const KeywordBtn = styled.button``;

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
        <KeywordBtn name="C.S" onClick={selectKeyword}>
          C.S
        </KeywordBtn>
      </KeywordList>
    </Main>
  );
};

export default SummaryHeader;
