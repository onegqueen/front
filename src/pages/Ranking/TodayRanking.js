import Rankbar from "../../components/Ranking/Rankbar"
import UserList from "../../components/UserList"
import{BrowserRouter,Route,Routes} from "react-router-dom";

export default function TodayRank(){
    return(
        <div>
            <Rankbar/>
            <UserList/>
        </div>
        
    )
}

