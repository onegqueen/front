import Header from "./components/Header";
import UserList from "./components/UserList";
import Pagination from "./components/Pagination";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Stats from "./pages/Stats/Stats";
import Summary from "./pages/Summary/Summary";


function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/summary" element={<Summary />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/userlist" element={<UserList />}></Route>
      </Routes>
    </>
  );
}
export default App;
