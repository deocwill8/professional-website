import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import profilePicture from './images/deona1.jpg'
import AboutMe from './about-me/About-Me'
import Projects from './projects-by-me/Projects'
import ContactMe from './contact-me/Contact-Me'
import data from './projects.json';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      projectData: data
    }

  }

  render() {
    return (
        <div className="main-container">
          <Route exact path="/" render={() => (
            <div className="main-container">
              <div className="first-container">
                  <div className="container-content">
                      <div className="inner-content-text">
                          <h1>Deona Williams</h1>
                          <p>
                          is simply dummy text of the printing and typesetting industry. 
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
                  </div>
                  <div className="second-container">
                    <div className="picture-container">
                          <img className="profile-picture" src={profilePicture} alt="deona" />
                    </div>
                    <div className="navigation-container">
                          <Link 
                          className="navigation-button"
                          to="/about-me">About Me
                          </Link>
                          <Link 
                          className='navigation-button'
                          to="/projects">Projects
                          </Link>
                          <Link 
                          className='navigation-button last-button'
                          to="/contact-me">Contact Me
                          </Link>
                    </div>
                    <div className="container-footer">
                        <p className="footer-text">Copyright 2018 Deona Williams. Made in the USA</p>
                    </div>
                  </div> 
                </div>  
              )} />
              <Route path="/about-me" component={AboutMe} />
              <Route path="/projects">
                <Projects projects={this.state.projectData.projects}></Projects>
              </Route>
              <Route path="/contact-me" component={ContactMe} />
       </div>
    );
  }
}

export default App;
