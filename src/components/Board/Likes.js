import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Stat = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
`;

const StatName = styled.div`
  width: 6rem;
  margin-left: 1rem;
`;

const StatPoints = styled.div`
  width: 2rem;
`;

const StatPlusBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: none;

  background-color: #395b64;
  color: white;
  cursor: pointer;
  border-radius: 0.5rem;
`;




/*html을 마크다운*/
const Likes = (props) => {
    const navigate = useNavigate();
    const { remainPoints, setRemainPoints } = props;

    const [likes, setLikes] = useState(0);

    const addPoints = () => {
          setLikes(likes+1);
      };

    return(
        <Stat>
        <StatName>좋아요</StatName>
        <StatPoints>{likes}</StatPoints>
        <StatPlusBtn name="like" onClick={addPoints}>
            ♥
        </StatPlusBtn>
        </Stat>
    );
}
export default Likes;
    