// 3rd Party modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Custom Component
import Login from './Login';
import Landing from './Landing';
import Home from './Components/Home/home.js';
import Animations from './Components/Animations';
class App extends Component {
  render() {
    return (
      <Router>
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />  
              <Route exact path="/Home" component={Home} /> 
              <Route exact path="/Animations" component={Animations} /> 
            </div>
      </Router>
    );
  }
}
export default App;
