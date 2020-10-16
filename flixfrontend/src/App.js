import React from 'react';
import Home from './Home';
import Header from './Header';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import './App.css';
function App() {
  return  (
    
    <div className="app">
      <Router>
        <Switch>
        <Route path="/">
       <Header />
       <Home />
      </Route>
        </Switch></Router>
        
    
        </div>
    
    
    
    );
  }
export default App;
