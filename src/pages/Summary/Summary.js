import styled from "styled-components";
import { useState } from "react";

import SummaryHeader from "../../components/Summary/SummaryHeader";
import SummaryContents from "../../components/Summary/SummaryContents";

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
