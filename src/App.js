import React, {Component} from 'react';
import ReactDom from 'react-dom';
import CrossfadeImage from './rxfadImage.js';


import logo from './logo.svg';
import man2 from './man2.svg';
import banner319 from './banner319.png';
import banner219 from './banner219.png';
import ban4 from './ban4.png';
import ban5 from './ban5.png';
import './App.css';

const images = [
    banner319, banner219, ban4, ban5
];

class App extends Component {
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
                    <a href="#login">Login/Register</a>
                </div>
                
            </div> 

            <img src={man2} className="profile" alt="profile"/>
          </header> 
        </section>
        <div id="top-of-photo">
          This is a separation line.
        </div>
          <div id="banner-photo">
            <CrossfadeImage 
            src={images[this.state.imageIndex]}
            className="top-photo"
            duration = {2000}
            timingFunction = {"ease-out"}
            />

            <h2 id="banner-text" > Keep track of your courses from anywhere </h2> 
          </div> 

        <div id="below-banner-photo" >
          <section>
            <article>
              <p>
                  Edify is a platform for Students and Teachers to stay in touch and up to date with the coursework. It allows for Teachers to post, edit, and delete all course materials and announcements, and for Students or their Parents to login and reach these materials and announcements.  Oauth is used for secure logins.  
              </p> 
              <p>
                  The future of this app will include a set of forums for everyone to communicate per class or individually. It also will include a video chat area and a screen sharing area so the teacher may teach long distance or help students individually or in groups. It will also include a schedule for the teacher to post all class events, and an individualized calendar and task list for each student to schedule their own work.
              </p> 
              <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.Ducimus a animi, odit accusamus totam voluptatem soluta.Cupiditate minima, molestiae ut in consequuntur, reiciendis alias, quidem tempore exercitationem eum fugiat ea!
              </p> 
              <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.Ducimus a animi, odit accusamus totam voluptatem soluta.Cupiditate minima, molestiae ut in consequuntur, reiciendis alias, quidem tempore exercitationem eum fugiat ea!
              </p> 
              <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.Ducimus a animi, odit accusamus totam voluptatem soluta.Cupiditate minima, molestiae ut in consequuntur, reiciendis alias, quidem tempore exercitationem eum fugiat ea!
              </p> 
            </article>
            <footer id="landing-footer">
              <div>
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
            </footer>
          </section> 
        </div> 
      </section>
    );
  }
}

export default App;

