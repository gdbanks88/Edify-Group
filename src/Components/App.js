import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Link
  // etc.
} from 'react-router-dom'
import '../CSS/App.css';
import BeerTap from './BeerTap.js';
import ComponentFeature from './CodeSamples/Practice-Component-WillMount.js'
// import MenuBar from './Menu-Bar/menu-bar.js';

// import Home from './Home/home.js';
// import Practice from './Practice-Component.js';

const styles = {
  navBar: {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    color: 'black',
    height: '50px',
  },
  homeImage:{
    height: '50px',
  },
  homeContainer:{
    height: '50px',
  },
  firstNavBox:{
    height: '50px',
    padding: '0',
  },
  optionImage:{
    height: '50px',
  },
  lastNavBox:{
    height: '50px',
    padding: '0'
  },
}


class App extends Component {
    render() {
      return (
        <Router>
            <div style ={styles.navBar}>
                <ul className="navItems">
                    <li style={styles.firstNavBox}>
                        <Link style={styles.homeContainer} to="/"><img style={styles.homeImage}src="https://freeiconshop.com/wp-content/uploads/edd/book-open-flat.png" alt="Home Icon"/></Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                        <Link to="/mycourses">My Courses</Link>
                    </li>
                    <li>
                      <input type="text" /><button>Search</button>
                    </li>
                    <li> 
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li style={styles.lastNavBox}>
                    <Link to="/options"><img style={styles.optionImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSd44ccnyNhe8Kio-gMr2tplxZMNp5ZB2uJfTFdl_cqdhp3F7" alt="Options" /></Link>
                    </li>
                </ul> 

                <hr />

                <Route exact path="/" component={ComponentFeature} />
                <Route path="/categories" component={Categories} />
                <Route path="/mycourses" component={MyCourses} />
                <Route path="/profile" component={Profile} />
                <Route path="/options" component={BeerTap} />
            </div>
        </Router>
    )
  }
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const Categories = () =>(
    <div> 
        <h2>About</h2>
    </div>
);

const MyCourses = ( {match}) =>(
    <div>
        <h2>Check out your courses!</h2>
        <ul>
            <li>
                <Link to={`${match.url}/learnHTML`}>HTML Beginner Course!</Link>
            </li> 
            <li>
                <Link to={`${match.url}/learnCSS`}>CSS for dummies!</Link>
            </li>
            <li>
                <Link to={`${match.url}/learnJavascript`}>How to become a Javascript ninja!</Link>
            </li>
        </ul>  
    </div>
);
     
const Profile = () =>(
  <div> 
      <h2>User profile coming soon!</h2>
  </div>
);

// const Options = () =>(
//   <div> 
//       {/* <h2>Profile options coming soon!</h2> */}
//   </div>
// );

export default App;