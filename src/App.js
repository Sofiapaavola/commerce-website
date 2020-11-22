import React , { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todo from './components/pages/Todo';
import About from './components/pages/About'; 
import NavBar from './components/layout/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuid} from 'uuid';
import axios from 'axios'; 

class App extends Component { 

  render() { 
    
    return (
    <Router>
      <div className="App">
          <NavBar></NavBar>
          <Route path="/about" component={About}/>
          <Route path="/support" component={Todo}/>
        </div>
    </Router>
    ); 
  }
}

export default App;
