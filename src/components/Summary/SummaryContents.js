import styled from "styled-components";
import axios from "axios";

const Main = styled.div``;

const InputDiv = styled.div`
  width: 38rem;
  margin: 0 auto;
`;

const Title = styled.input.attrs(() => ({
  placeholder: "제목을 입력하세요.",
}))`
  width: 38rem;
  height: 3rem;
  font-size: 1.5rem;
  margin: 1rem 0;
  background-color: inherit;
  border: 1px solid black;
  :focus {
    outline: none;
  }
`;
const Content = styled.textarea.attrs(() => ({
  placeholder: "내용을 입력하세요.",
}))`
  width: 38rem;
  height: 20rem;
  resize: none;
  tab-size: 1rem;
  overflow: auto;
  margin: 1rem 0;
  border: 1px solid black;
  background-color: inherit;
  :focus {
    outline: none;
  }
`;

const SummaryContents = (props) => {
  const { summary, setSummary, keyword } = props;

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

  const registerSummary = async () => {
    try {
      const res = await axios({
        method: "post",
        // url: `/api/post/summary/${summary.keyword}`,
        url: "/apis/post/summary/frontend",
        data: {
          topic: summary.title,
          content: summary.content,
        },
      });

      console.log(res);
    } catch (error) {
      const err = error.response.data;
      console.log(err);
    }
  };

  return (
    <Main>
      <InputDiv>
        <Title
          name="topic"
          value={summary.topic}
          onChange={changeSummary}
        ></Title>
      </InputDiv>
      <InputDiv>
        <Content
          name="content"
          value={summary.content}
          onChange={changeSummary}
          onKeyDown={clickTab}
        ></Content>
      </InputDiv>

      <button onClick={registerSummary}>등록하기</button>
    </Main>
  );
};

export default SummaryContents;
