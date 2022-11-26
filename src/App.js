import Header from "./components/Header";
import TodayRank from "./pages/Ranking/TodayRanking";
import AllContent from "./pages/Board/AllContent";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Stats from "./pages/Stats/Stats";
import Summary from "./pages/Summary/Summary";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyAccountPage from "./pages/MyAccountPage";
import UserList from "./components/Ranking/UserList";
import Pagination from "./components/Pagination";
import CorsArticle from "./pages/Board/CorsArticle";
import CommentContents from "./components/Board/Comment";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/MyAccount" element={<MyAccountPage />} />
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/summary" element={<Summary />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/userlist" element={<UserList />}></Route>
        <Route path="/rank" element={<TodayRank />}></Route>
        <Route path="/board" element={<AllContent />}></Route>
        <Route path="/article" element={<CorsArticle />}></Route>
      </Routes>
    </>
  );
}
export default App;
