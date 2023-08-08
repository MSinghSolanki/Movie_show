import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {ShowList} from './components/ListView/firstview.jsx';
import {ShowDetails} from './components/SummaryView/second.jsx';
import { WelcomePage } from './components/Welcome/main.jsx';
import "./App.css"

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