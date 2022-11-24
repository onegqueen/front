import Header from "./components/Header";
import TodayRank from "./pages/Ranking/TodayRanking";
import AllContent from "./pages/Board/AllContent";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Stats from "./pages/Stats/Stats";
import Summary from "./pages/Summary/Summary";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyAccountPage from "./pages/MyAccountPage";
import UserList from "./components/Ranking/UserList";
import Pagination from "./components/Pagination";
import Friends from "./pages/Friends/Friends";
import FriendsResponse from "./pages/Friends/FriendsResponse";
import Footer from "./pages/Footer/Footer";
import axios from "axios";

const AllWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

axios.defaults.withCredentials = true;
function App() {
  return (
    <AllWrapper>
      <GlobalStyle />
      <ContentWrapper>
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
          <Route path="/test" element={<UserList />}></Route>
          <Route path="/friends-list" element={<Friends />}></Route>
          <Route
            path="/friends/response-list"
            element={<FriendsResponse />}
          ></Route>
        </Routes>
      </ContentWrapper>
      <Footer />
    </AllWrapper>
  );
}
export default App;
