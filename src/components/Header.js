import styled from 'styled-components'

const Header_bar = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    flex-wrap:wrap;
    align-items:center;
    align-content:center;
`

export default function Header(){
    return(
        <Header_bar className = "header">
            <h1>
                <a href="/"> Today's Ranking </a>
            </h1>
        </Header_bar>
    )
}