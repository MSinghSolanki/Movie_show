import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {ShowList} from './components/firstview/firstview.jsx';
import {ShowDetails} from './components/second/second.jsx';
import "./App.css"
const App=()=> {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<ShowList/>} />
      <Route path="/show/:id" element={<ShowDetails/>} />
    </Routes>
    </div>
  );
}

export default App;