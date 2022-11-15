import styled from 'styled-components';
import apiClient from "../../libs/api/apiClient";
import { useState, useEffect } from "react";
import UserAPI from '../../libs/api/user';
import Pagination from "../Pagination";
import {Link} from 'react-router-dom';

const Header = styled.ul`
    background-color:gray;
    font-size:15px;
    margin-bottom:1px;
    padding-top:5px;
    padding-bottom:5px;
    padding-left:0px;


    display:grid;
    grid-template-columns: 20% 25% 12% 10% 20%;


    flex-direction:row;
    justify-content:space-between;
    /*align-items:center;*/


    /*border*/
    border-style: solid;
    border-color:gray;
    border-top-width: 0px;
    border-bottom-width:2px;
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
    margin-right:30px;
    width: 95%;/*vh: view hight - 보이는 부분의 100을*/
`

const Content = styled.li`
    font-size:20px;
    margin-bottom:1px;
    padding-top:5px;
    padding-bottom:5px;

    display:grid;
    grid-template-columns: 5% 30% 20% 7% 20%;


    flex-direction:row;
    justify-content:space-between;
    /*align-items:center;*/


    /*border*/
    border-style: solid;
    border-color:gray;
    border-top-width: 0px;
    border-bottom-width:2px;
    border-left-width:0px;
    border-right-width:0px;
`
const Num = styled.b`
`
const Topic = styled.span`
`
const Category = styled.span`
`
const Like = styled.b`
`
const Date = styled.b`
`

export default function Board(){
    const [contentList, setContentList] = useState([])

    useEffect( () => {
        fetch('http://localhost:3001/contents/3')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    setContentList(data.data)
  });

    }, [])

    
    const[currentPage, setCurrentPage]=useState(1);
    const[postPerPage]=useState(10)
    
    const indexOfLastPost=currentPage * postPerPage;
    const indexOfFirstPost=indexOfLastPost - postPerPage;
    const currentPosts=contentList.slice(indexOfFirstPost,indexOfLastPost);

    const paginate = pageNum => setCurrentPage(pageNum);

    return(
        <>
            
            <Keywords className = "keylist">
                <Header>
                    <Num>글 번호</Num>
                    <Topic>글 제목</Topic>
                    <Category>주제</Category>
                    <Like>좋아요 수</Like>
                    <Date>작성일자</Date>
                </Header>
                {currentPosts.map((Post)=>(
                    <Content key={Post.id}>
                            <Num>{contentList.indexOf(Post)+1}</Num>
                            <Topic>{Post.topic}</Topic>
                            <Category>{Post.category}</Category>
                            <Like>{Post.likes}</Like>
                            <Date>{Post.date}</Date>
                    </Content>
                ))}
            </Keywords>
            <Pagination 
                postPerPage = {postPerPage}
                totalPosts={contentList.length}
                paginate={paginate}/>
        </>
    );

}
