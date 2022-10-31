import styled from 'styled-components';
import apiClient from "../libs/api/apiClient";
import { useState, useEffect } from "react";
import UserAPI from '../libs/api/user';
import Pagination from "./Pagination";

/*https://data05.tistory.com/118?category=995051*/
const Rank = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:center;
    list-style:none;
    align-items:space-between;
    align-content:center;
    margin-right:30px;
    width: 95%;/*vh: view hight - 보이는 부분의 100을*/
`

const Rank_content = styled.li`
    font-size:20px;
    margin-bottom:1px;
    padding-top:5px;
    padding-bottom:5px;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;


    /*border*/
    border-style: solid;
    border-color:gray;
    border-top-width: 0px;
    border-bottom-width:2px;
    border-left-width:0px;
    border-right-width:0px;
`
const Rank_num = styled.b`
    font-size:25px;
    margin-right:20px;
`
const User_ = styled.span`
`


const UserName = styled.span`
    font-size:20px;
    margin-right:20px;
`
const UserStudyTime = styled.span`
    font-size:15px;
    float:right;
    margin-right:30px;
    align-items:center;
    background-color:beige;

`

export default function UserList(){
    const [userList, setUserList] = useState([])

    useEffect( () => {
        fetch('http://localhost:3001/all-users/1')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    setUserList(data.data)
  });

    }, [])
    

    const[currentPage, setCurrentPage]=useState(1);
    const[postPerPage]=useState(10)
    
    const indexOfLastPost=currentPage * postPerPage;
    const indexOfFirstPost=indexOfLastPost - postPerPage;
    const currentPosts=userList.slice(indexOfFirstPost,indexOfLastPost);

    const paginate = pageNum => setCurrentPage(pageNum);

    return(
    <>
        <Rank className = "list_user">
            {currentPosts.map((User)=>(
                <Rank_content key={User.Nickname}>
                    <User_>
                        <Rank_num>{userList.indexOf(User)+1}위</Rank_num>
                        <UserName>{User.Nickname}님</UserName>
                    </User_>
                    <UserStudyTime>-------{User.Time}시간 달성 !</UserStudyTime>
                </Rank_content>
            ))}
            
        </Rank>
        <Pagination 
            postPerPage = {postPerPage}
            totalPosts={userList.length}
            paginate={paginate}/>
    </>);
}

/*
return(
    <>
        <Rank className = "list_user">
            {userList.map((User)=>(
                <Rank_content key={User.Nickname}>
                    <User_>
                        <Rank_num>{userList.indexOf(User)+1}위</Rank_num>
                        <UserName>{User.Nickname}님</UserName>
                    </User_>
                    <UserStudyTime>-------{User.Time}시간 달성 !</UserStudyTime>
                </Rank_content>
            ))}
        </Rank>
        <Pagination 
            postPerPage = {postPerPage}
            totalPosts={userList.length}
            paginate={paginate}/>
    </>);*/