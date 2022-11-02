import styled from "styled-components";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

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

  const clickTab = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      let val = e.target.value;
      let start = e.target.selectionStart;
      let end = e.target.selectionEnd;
      e.target.value = val.substring(0, start) + "\t" + val.substring(end);
      e.target.selectionStart = e.target.selectionEnd = start + 1;
      changeSummary(e);
      return false;
    }
  };

  console.log(summary);

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
        onKeyDown={clickTab}
      ></Content>
      <div>미리보기</div>
      <ReactMarkdown children={summary.content} />
      <RegisterBtn>등록하기</RegisterBtn>
    </Main>
  );
};

export default SummaryContents;
