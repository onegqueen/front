import Header from "./components/Header";
import UserList from "./components/UserList";
import Pagination from "./components/Pagination";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Stats from "./pages/Stats/Stats";
import Summary from "./pages/Summary/Summary";
import LoginPage from "./pages/LoginPage";
import MyAccountPage from "./pages/MyAccountPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/summary" element={<Summary />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/userlist" element={<UserList />}></Route>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/MyAccount" element={<MyAccountPage />} />
      </Routes>
    </>
  );
}
export default App;
