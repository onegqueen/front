import styled from 'styled-components'

const Header_bar = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    flex-wrap:wrap;
    align-items:center;
    align-content:center;
    
`

export default function Keywordbar(){
    return(
        <Header_bar className = "keywordbar">
            <h1>
                <a href="/"> 게시판 </a>
            </h1>
        </Header_bar>
    )
}