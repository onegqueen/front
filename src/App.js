import Header from "./components/Header";
import TodayRank from "./pages/Ranking/TodayRanking";
import KeywordContent from "./pages/Board/KeywordContent";
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
        <Route path="/rank" element={<TodayRank />}></Route>
        <Route path="/keyword" element={<KeywordContent />}></Route>
      </Routes>
    </>
  );
}
export default App;
