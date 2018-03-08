import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const RouteComponent = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul> 

            <hr />

            <Route exact path="/home" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/topics" Component={Topics} />
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () =>(
    <div> 
        <h2>About</h2>
    </div>
);

const Topics = ( {match}) =>(
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li> 
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}></Link>
            </li>
        </ul>  
    </div>
)



export default RouteComponent;