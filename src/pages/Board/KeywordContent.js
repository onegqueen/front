import Keywordbar from "../../components/Board/Keywordbar";
import KeywordList from "../../components/Board/KeywordList"
import{BrowserRouter,Route,Routes} from "react-router-dom";

export default function KeywordContent(){
    return(
        <div>
            <Keywordbar/>
            <KeywordList/>
        </div>
    )
}
