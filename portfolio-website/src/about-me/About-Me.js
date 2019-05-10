import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SideBar from '../components/sidebar/sidebar'
import Navbar from '../components/navbar/navbar'
import profilePicture from '../images/deona1.jpg'
import './About-Me.css'

class AboutMe extends Component {
  render() {
    return (
      <div id="aboutMe">
      <Navbar />
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"aboutMe"} />
        <Route path="/about-me" render={() => (
            <div id="page-wrap">
              <div className="about-me-wrapper">
                {/* <div className="nav-container">
                  <h2>Deona Williams</h2>
                </div> */}
                <div className="about-me-container">
                  <div className="container-one">
                    <img className="about-me-picture" src={profilePicture} alt="deona" />
                  </div>
                  <div className="container-two">
                    <p className="about-me-text">
                    As a passionate web developer I find magic in every line of code I write. 
                    I love seeing things come to fruition in the browser and on web applications. 
                    I have been focusing mainly on front-end languages 
                    and technologies.I am originally from East Chicago, Indiana and studied Informatics 
                    at Indiana University in Bloomington, Indiana. Taking Human Computer Interaction (HCI) courses there is what 
                    initiated my aspiration to create technologies and products to help people.
                    Ive currently worked with HTML/CSS, Bootstrap, JavaScript, AngularJS, PHP, and web 
                    build/automation tools. You may view my source code on GitHub by clicking on 
                    the link below. 
                    </p>  
                  </div>
                  <div className="container-three">
                    <p className="quote-text">
                      First paragraph.  is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since 
                    </p> 
                  </div>
                </div>
              </div>
            </div>
          )} />
      </div>
    );
  }
}

export default AboutMe;