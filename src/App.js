import { createPortal } from 'react-dom';
import React,{useState} from 'react';
import Header from "./components/Header"
import UserList from "./components/UserList"
import Pagination from "./components/Pagination"
import{BrowserRouter,Route,Switch} from "react-router-dom";


function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <UserList/>
       </div>
    </>
  );
}
export default App;
/*?*/
