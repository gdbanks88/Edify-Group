// 3rd Party modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Custom Component
import Login from './Login';
import Landing from './Landing';
class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login" component={Login} />
                </div>
            </Router>
        );
    }
}
export default App;