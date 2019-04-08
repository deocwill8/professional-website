import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import SideBar from '../components/sidebar/sidebar'
import mainPicture from '../images/typing.jpg'
import profilePicture from '../images/deona1.jpg'
import './home.css';

class Home extends Component {
  render() {
    return (
        <div id="home" className="outermost-container">
          <Route path="/" render={() => (
            <div className="main-container">
              <div className="navbar">
                <Navbar />
                <SideBar />
              </div>
              <div className="content-container">
                <div className="hero-image-container">
                  <img className="hero-image" src={mainPicture} alt="deona" />
                </div>
                <div className="info-container">
                  <img className="avatar" src={profilePicture} alt="avatar" />
                  <h1>Deona Williams</h1>
                  <p className="home-info">
                    This is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since 
                    the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. It has survived not 
                    only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s 
                    with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                  </div>
                </div> 
              <div className="footer-container">
                <p className="footer-text">Copyright 2018 Deona Williams. Made in the USA</p>
              </div>
            </div>  
              )} />
       </div>
    );
  }
}

export default Home;
