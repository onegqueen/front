import styled from 'styled-components';
import apiClient from "../../libs/api/apiClient";
import { useState, useEffect } from "react";
import UserAPI from '../../libs/api/user';
import Pagination from "../NewPagination";
import {Link} from 'react-router-dom';
import axios from 'axios';

const Body = styled.body`
background-color:#2C3333;
`
const ContentList = styled.ul`
`
const Header = styled.ul`
    border-radius: 20px 20px 20px 20px;
    color:#E7F6F2;
    background-color:#395B64;
    font-size:15px;
    margin-bottom:10px;
    padding-top:5px;
    padding-bottom:5px;
    padding-left:10px;

    display:grid;
    grid-template-columns: 8% 17% 16% 16.5% 11% 11%;

    flex-direction:row;
    justify-content:space-between;
    /*align-items:center;*/


    /*border*/
    border-style: solid;
    border-color:gray;
    border-top-width: 0px;
    border-bottom-width:0px;
    border-left-width:0px;
    border-right-width:0px;
    
`
const Keywords = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:center;
    list-style:none;
    align-items:space-between;
    align-content:center;
    /*margin-right:30px;*/
    width: 95%;/*vh: view hight - 보이는 부분의 100을*/
    padding-left:0px;
    margin-left:5vh;

    /*border*/
    border-style: solid;
    border-color:gray;
    border-top-width: 2px;
    border-bottom-width:2px;
    border-left-width:2px;
    border-right-width:2px;

    border-radius: 20px 20px 20px 20px;
`

const Content = styled.li`
    font-size:20px;
    margin-bottom:1px;
    padding-top:5px;
    padding-bottom:5px;
    padding-left:20px;

    display:grid;
    grid-template-columns: 3% 20% 20% 20% 7% 15%;


    flex-direction:row;
    justify-content:space-between;
    align-items:center;


    /*border*/
    border-style: solid;
    border-color: gray;
    border-top-width: 2px;
    border-bottom-width:0px;
    border-left-width:0px;
    border-right-width:0px;
    border-radius: 20px 20px 20px 20px;
`
const Num = styled.b`
`
const Topic = styled.span`
`
const Category = styled.span`
`
const Writer = styled.span`
`
const Like = styled.b`
`
const Date = styled.b`
`

export default function BoardTable(){
    const [contentList, setContentList] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
   
    const [page, setPage] = useState(1);
    const handlePageChange = (page)=>{setPage(page);};
    
    useEffect(() => {
      const fetchBoard = async (page) => {
        try {
          setError(null);
          setContentList(null);
          setLoading(true);
          const response = await axios.get(
            `http://localhost:3001/contents/3`
          );
          console.log(response.data)
          console.log(response.data.data)
          setContentList(response.data.data);
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };

  
      fetchBoard(page);
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!contentList) return null;  


    return(
        <Body>
            <Keywords className = "keylist">
                <Header>
                    <Num>글 번호</Num>
                    <Topic>글 제목</Topic>
                  <Category>주제</Category>
                    <Writer>작성자</Writer>
                    <Like>좋아요 수</Like>
                    <Date>작성일자</Date>
                </Header>
                {contentList.map((Post)=>(
                    <Content key={Post.id}>
                            <Num>{contentList.indexOf(Post)+1}</Num>
                            <Topic>
                                <Link to = {`./${Post.id}`}>{Post.topic}</Link>
                            </Topic>
                            <Category>{Post.category}</Category>
                            <Writer>{Post.id}</Writer>
                            <Like>♥{Post.likes}</Like>
                            <Date>{Post.date}</Date>
                    </Content>
                ))}
            </Keywords>
            <Pagination 
                totalPageCount={10}
                onChange = {handlePageChange}/>
        </Body>
    );

}
