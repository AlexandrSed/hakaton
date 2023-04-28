import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import {HHCardComponent} from "./screens/Dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={ <HHCardComponent/> }/>
      </Routes>
    </div>
  );
}

export default App;
