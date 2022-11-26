import styled from 'styled-components';
import { useState, useEffect,useCallback } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import CommentContents from './Comment';
import { Route, Routes } from "react-router-dom";


const box = styled.ul`
`
const ArticleHeader = styled.nav`
  background-color : pink;
  padding-left:20px;
  padding-top:15px;
  padding-bottom:15px;
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
`
const Comment = styled.div`
`


export default function Article(){
    const [content, setContent] = useState()
    const [replycontent,setReplyContent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchContent = async () => {
          const response = await axios.get(
            `http://localhost:3001/article`
          );
      let timer = setTimeout(() => {
            setContent(response.data);
            console.log(content);
        }, 3000)
        return ()=> clearTimeout(timer)
        }
        fetchContent();
    },[]);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!content) return null;


    return(
        <>
            <Article key = {content.id}>
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
                {content.content}
              </Content>
            </Article>
        </>
    );

}
