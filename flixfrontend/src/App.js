import React from 'react';
import Home from './Home';
import Header from './Header';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import './App.css';
function App() {
  return  (

    <Switch>
      <Route path="/">
    <Header />
    <Home />
    </Route>
</Switch>
    
    );
  }
export default App;
