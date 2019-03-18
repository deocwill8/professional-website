import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import profilePicture from '../images/deona1.jpg'
import SideBar from '../components/sidebar/sidebar'
import './About-Me.css'

class AboutMe extends Component {
  render() {
    return (
      <div id="aboutMe" className="centered">
        <SideBar />
        <Route path="/about-me" render={() => (
            <div className="centered">
              <div className="about-me-wrapper">
                <div className="container1">
                  <img className="about-me-picture" src={profilePicture} alt="deona" />
                </div>
                <div className="container2">
                    <p className="about-me-text">
                    First paragraph. is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since 
                    the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. It has survived not 
                    only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s 
                    with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum. End
                    </p>  
                  </div>
              </div>
            </div>
          )} />
      </div>
    );
  }
}

export default AboutMe;