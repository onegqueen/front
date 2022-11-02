import Keywordbar from "../components/Keywordbar";
import KeywordList from "../components/KeywordList"
import{BrowserRouter,Route,Routes} from "react-router-dom";

export default function Keywordcontent(){
    return(
        <div>
            <Keywordbar/>
            <KeywordList/>
        </div>
    )
}
