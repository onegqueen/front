import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const Preview = styled.div``;

const Topic = styled.div`
  height: 3rem;
  border-bottom: 2px solid black;
  line-height: 3rem;
  font-size: 2rem;
  overflow: hidden;
`;

const Markdown = styled.div`
  // 엔터누르면 \n 적용
  * {
    white-space: pre-wrap;
    word-break: break-all;
  }
  // 기본 글자 크기 작게
  p {
    font-size: 1.4rem;
    margin: 1.6rem 0;
    white-space: pre-wrap;
    word-break: break-all;
  }
  ul {
    font-size: 1.4rem;
    padding-left: 2rem;
    margin: 0.5rem 0;
    white-space: pre-wrap;
    word-break: break-all;
  }
`;

const SummaryPreview = (props) => {
  const { summary, keyword } = props;

  return (
    <Preview>
      <Topic>{summary.topic}</Topic>
      <Markdown>
        <ReactMarkdown children={summary.content} />
      </Markdown>
    </Preview>
  );
};

export default SummaryPreview;
