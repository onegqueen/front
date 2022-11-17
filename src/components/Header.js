import styled from 'styled-components'
import {Link} from "react-router-dom"
const Header_bar = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    flex-wrap:wrap;
    align-items:center;
    align-content:center;
`

export default function Header(){
    return(
        <Header_bar className = "header">
            <h1>
                <Link to ="/board"> 게시판 </Link>
                <Link to ="/rank"> 랭킹 </Link>
                <Link to ="/Login"> 로그인 </Link>
                <Link to ="/summary"> summary </Link>
                <Link to ="/stats"> 꽃키우기 </Link>

            </h1>
        </Header_bar>
    )
}