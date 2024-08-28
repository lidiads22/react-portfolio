import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from "./pages/Home/Homescreen";
import React from 'react';

function App() {
  return (
  <div className="App">
    <Home />
    </div>
  );
  
}

export default App;
