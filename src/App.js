import Header from "./components/Header";
import TodayRank from "./pages/Ranking/TodayRanking";
import KeywordContent from "./pages/Board/KeywordContent";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Stats from "./pages/Stats/Stats";
import Summary from "./pages/Summary/Summary";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyAccountPage from "./pages/MyAccountPage";
import UserList from "./components/UserList";
import Pagination from "./components/Pagination";
import Friends from "./pages/Friends/Friends";
import FriendsResponse from "./pages/Friends/FriendsResponse";

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
        <Route path="/keyword" element={<KeywordContent />}></Route>
        <Route path="/test" element={<UserList />}></Route>
        <Route path="/friends-list" element={<Friends />}></Route>
        <Route
          path="/friends/response-list"
          element={<FriendsResponse />}
        ></Route>
      </Routes>
    </>
  );
}
export default App;
