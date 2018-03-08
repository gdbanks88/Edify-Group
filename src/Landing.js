import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

import logo from './images/logo.svg';
import man2 from './images/man2.svg';
import banner319 from './images/banner319.png';
import banner219 from './images/banner219.png';
import ban4 from './images/ban4.png';
import ban5 from './images/ban5.png';
import './CSS/Landing.css';


const images = [
    banner319, banner219, ban4, ban5
];

const isMobile = window.innerWidth <= 500;
console.log("isMobile = " + isMobile);

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      callback: this.changeImage,
      imageIndex: 0,
      count: 0,
      timeout: 400
    };
    this.changeImage = this.changeImage.bind(this);
    console.log("constructor set imageIndex to 0 here");
  }
  changeImage() {
    console.log("changeImage here");
    const {count} = this.state;
    this.setState( {count: count + 1} );
    if ({count} > 20000) {
      this.setState({ count: 0 });
      if (this.state.imageIndex === images.length - 1){
        this.setState({ imageIndex: 0 });
      }else{
        this.setState({ imageIndex: this.state.imageIndex + 1});
      }
    } 
  }
  render() {
    return ( 
      <section className="App">
        <section id="contain-header">
          <header>
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="flex-container">
                <div className="ed">
                    <a className="active" href="#edify">EDIFY</a>
                </div>
                <div id="ph1" > 2</div>
                <div className="categories" >
                    <a className="active" href="#categories">Categories</a>
                </div>
              <div id="ph1" > 2</div>

              <div className="search-container">
                <form action="/action_page.php">
                  <input type="text" placeholder="Search.." name="search" />

                </form>
              </div>
              <div id="ph1" >2</div>
                <div id="login">
                    <Link to="/login">Sign in</Link>
                  
                </div>
                
            </div> 

            <img src={man2} className="profile" alt="profile"/>
          </header> 
        </section>
        <section id="top-of-photo">
          This is a separation line.
        </section>
          <div id="banner-photo">
           <img className="bottom" src={ban5} alt="banner" />
           <img className="top" src={banner319} alt="banner" /> 

            <p id="banner-text" > Keep track of your courses </p>
          <p id="banner-text2" >  from anywhere </p> 
          </div> 

        <div id="below-banner-photo" >
          <section className="landing-page-content">
            <article>
              <p>
                  Edify is a platform for Students and Teachers to stay in touch and up to date with the coursework. It allows for Teachers to post, edit, and delete all course materials and announcements, and for Students or their Parents to login and reach these materials and announcements.  Oauth is used for secure logins.  
              </p> 
              <p>
                  The future of this app will include a set of forums for everyone to communicate per class or individually. It also will include a video chat area and a screen sharing area so the teacher may teach long distance or help students individually or in groups. It will also include a schedule for the teacher to post all class events, and an individualized calendar and task list for each student to schedule their own work.
              </p> 
              <p>
                  This is a learning management system merged with a real-time messaging system. Your class or team can keep track of each other and the notes, coursework, reference materials and tools to use. 
              </p> 
              <p>
                  A constant flow of conversation, ideas, progress reports, and work. 
              </p> 
              <p>
                  Virtual classrooms and on-site classes are both enhanced by the ease of communication.
              </p> 
            </article>
            <section id="landing-footer1">
              <div id="row-of-boxes">
                <ul className="footings">
                  <div>
                    <li>
                      <a href="#login">Sign in</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#subscribe">Subscribe</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#faqs">FAQS</a>
                    </li>
                  </div>
                </ul> 
                <ul className="footings2">
                  <div>
                    <li>
                      <a href="#locations">Locations</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#contact">Contact us</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a href="#terms">Terms</a>
                    </li>
                  </div>
                </ul>
              </div>
            </section>
          </section> 
        </div> 
      </section>
    );
  }
}

export default Landing;
