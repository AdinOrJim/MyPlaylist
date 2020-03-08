import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route,} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Nav from './components/Navbar';
import Greeting from './components/Greeting';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <Nav/>
    <Greeting />
      <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      </div>
    </BrowserRouter>
  );
}
}
export default App;
