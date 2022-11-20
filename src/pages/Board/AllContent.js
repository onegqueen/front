import Keywordbar from "../../components/Board/Keywordbar";
import Board from "../../components/Board/Board";
import{BrowserRouter,Route,Routes} from "react-router-dom";

export default function AllContent(){
    return(
        <div>
            <Keywordbar/>
            <Board/>
        </div>
    )
}