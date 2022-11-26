import Keywordbar from "../../components/Board/Keywordbar";
import BoardTable from "../../components/Board/BoardTable";
import{BrowserRouter,Route,Routes} from "react-router-dom";

export default function AllContent(){
    return(
        <div>
            <Keywordbar/>
            <BoardTable/>
        </div>
    )
}