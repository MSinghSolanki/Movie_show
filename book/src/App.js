import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {ShowList} from './components/firstview/firstview.jsx';
import {ShowDetails} from './components/second/second.jsx';
import "./App.css"
import WelcomePage from './components/main/main.jsx';
const App=()=> {
  return (
    <div>
    <Routes>
    <Route path="/" element={<WelcomePage />} />
      <Route exact path="/showlist" element={<ShowList/>} />
      <Route path="/show/:id" element={<ShowDetails/>} />
    </Routes>
    </div>
  );
}

export default App;