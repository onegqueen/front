import styled from 'styled-components';
import { useState, useEffect,useCallback } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import CommentContents from './Comment';
import Likes from'./Likes';
import ReactMarkdown from "react-markdown";
import { Route, Routes } from "react-router-dom";
import TurndownService from 'turndown';



const Main = styled.div`
  display: columns;
  height: calc(100% - 30px);
  align-items: center;
  margin: 0 auto;
  width: 100rem;
  font-family: SCDream5;
`;
const ArticleHeader = styled.nav`
  /*border*/
  border-style: solid;
  border-color:#395B64;
  border-top-width: 4px;
  border-bottom-width:4px;
  border-left-width:4px;
  border-right-width:4px;

  color:#2C3333;
  padding-left:20px;
  padding-top:15px;
  padding-bottom:15px;

  margin-top:10px;
`
const Category = styled.div`
  font-size:15px;
`
const Title = styled.div`
  font-size:30px;
  padding-top:5px;
  padding-bottom:5px;
`
const UserName = styled.div`
  font-size:12px;
`
const Date = styled.div`
  font-size:12px;
`
const Content = styled.article`
  margin-top:10px;
  margin-left:0px;
  margin-right:0px;

  /*border*/
  border-style: solid;
  border-color:gray;
  border-top-width: 2px;
  border-bottom-width:2px;
  border-left-width:2px;
  border-right-width:2px;

  border-radius: 5px 5px / 5px 5px;

  padding:15px;
  

`

const ReplyBox = styled.div`
  margin-top:10px;
  font-size:15px;
`


const Markdown = styled.div`
  
  // 엔터누르면 \n 적용
  * {
    white-space: pre-wrap;
    word-break: break-all;
  }
  // 기본 글자 크기 작게
  p {
    color:white;
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


export default function Article(){
    const [content, setContent] = useState();
    const [replycontent,setReplyContent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const TurndownService =require('turndown').default

    const turndownService = new TurndownService();
    
  
    useEffect(() => {
      const fetchContent = async () => {
          const response = await axios.get(
            `http://localhost:3001/article`
          );
          console.log(response.data);
          setContent(response.data);
        }
        fetchContent();
    },[]);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!content) return null;

    const markdown = turndownService.turndown(`
      <div>안녕하세요 어쩌구 저쩌구 이렁쿵저러쿵</div>
    `);
    console.log(markdown);

    


    return(
        <>
            <Main key = {content.id}>
              <ArticleHeader classname = "article">
                <Category>
                  <Link to>{content.category} {'>'}</Link>
                </Category>
                <Title>
                  {content.topic}
                </Title>
                <UserName>
                  {content.nickname}
                </UserName>
                <Date>
                  {content.date}
                </Date>
              </ArticleHeader>
              <Content>
                <Markdown>
                  {markdown}
                </Markdown>
              </Content>

              <Likes/>

              <ReplyBox>
                <div>댓글작성</div>
                <CommentContents/>
              </ReplyBox>

            </Main>
            
            
        </>
    );
}
