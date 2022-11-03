import styled from "styled-components";
import { useState } from "react";

import "../../App.css";

import SummaryHeader from "../../components/Summary/SummaryHeader";
import SummaryContents from "../../components/Summary/SummaryContents";

const Main = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

  font-family: SCDream5;
`;

const Content = styled.div`
  width: 40rem;
  padding: 2rem 0;
  border: 0.3rem solid #b9e0ff;
  border-radius: 2rem;
`;

const Summary = () => {
  const [keyword, setKeyword] = useState("프론트엔드");

  return (
    <Main>
      <Content>
        <SummaryHeader keyword={keyword} setKeyword={setKeyword} />
        <SummaryContents keyword={keyword} />
      </Content>
    </Main>
  );
};

export default Summary;
