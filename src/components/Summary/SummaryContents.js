import styled from "styled-components";
import { useState } from "react";

const Main = styled.div`
  width: 350px;
  margin: 0 auto;
`;

const Title = styled.input.attrs(() => ({
  placeholder: "제목",
}))`
  width: 100%;
`;
const Content = styled.textarea.attrs(() => ({
  placeholder: "내용",
}))`
  width: 100%;
  height: 200px;
  resize: none;
`;

const RegisterBtn = styled.button``;

const SummaryContents = (props) => {
  const { keyword } = props;
  const [summary, setSummary] = useState({
    title: "",
    content: "",
    keyword: keyword,
  });

  const changeSummary = (e) => {
    const { name, value } = e.target;
    setSummary({ ...summary, [name]: value });
  };

  return (
    <Main>
      <Title
        name="title"
        value={summary.title}
        onChange={changeSummary}
      ></Title>
      <Content
        name="content"
        value={summary.content}
        onChange={changeSummary}
      ></Content>
      <RegisterBtn>등록하기</RegisterBtn>
    </Main>
  );
};

export default SummaryContents;
