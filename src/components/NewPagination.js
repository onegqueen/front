import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Page = styled.ul`
    text-align:center;
`
const Pagenum = styled.li`
    display:inline-block;
    background:#dedede;
    overflow:hidden;
`

const Click = styled.a`
    text-decoration:none;
    width:10px;
    height:10px;
    padding:20px;

    &:focus{
        background-color:yellow;
    }
`
const Pagination = ({totalPageCount,onChange})=>{
    const pageNumbers=[];

    for (let i=1; i<Math.ceil(totalPageCount)+1;i++){
        pageNumbers.push(i);
    }
    

    return(
        <nav>
            <Page className="pagination">
                {pageNumbers.map(num=>
                    <Pagenum key = {num}>
                        <Click onClick={()=> onChange(num)}>
                            <Link to={`./${num}`}>{num}</Link>
                        </Click>
                    </Pagenum>)}

            </Page>
        </nav>
    );
};

export default Pagination;