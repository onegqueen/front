import styled from "styled-components";
import { useState } from "react";

import "../../App.css";

import SummaryHeader from "../../components/Summary/SummaryHeader";
import SummaryContents from "../../components/Summary/SummaryContents";
import SummaryPreview from "../../components/Summary/SummaryPreview";

const Main = styled.div`
  display: flex;
  height: calc(100% - 30px);
  align-items: center;
  margin: 0 auto;
  width: 85rem;
  font-family: SCDream5;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 40rem 40rem;
  column-gap: 5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 40rem;
    column-gap: 0;
    row-gap: 5rem;
  }
`;

const Content = styled.div`
  width: 40rem;
  padding: 2rem 0;
  border: 0.3rem solid #b9e0ff;
`;
const Preview = styled(Content)`
  padding: 0;
`;

const Summary = () => {
  const [keyword, setKeyword] = useState("프론트엔드");

  const [summary, setSummary] = useState({
    topic: "",
    content: "",
  });

  return (
    <Main>
      <Wrapper>
        <Content>
          <SummaryHeader keyword={keyword} setKeyword={setKeyword} />
          <SummaryContents
            summary={summary}
            setSummary={setSummary}
            keyword={keyword}
          />
        </Content>
        <Preview>
          <SummaryPreview summary={summary} keyword={keyword} />
        </Preview>
      </Wrapper>
    </Main>
  );
};

export default Summary;
