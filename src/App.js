import { createPortal } from 'react-dom';
import React,{useState} from 'react';
import Header from "./components/Header"
import TodayRank from"./page/TodayRanking"
import KeywordContent from"./page/KeywordContent"
import Pagination from "./components/Pagination"
import{BrowserRouter,Route,Routes} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/rank/:id" element ={<TodayRank/>}/>
          <Route path="/keywordc/:id" element ={<KeywordContent/>}/>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
/*<Routes>
          <TodayRank/>
        </Routes>*/
