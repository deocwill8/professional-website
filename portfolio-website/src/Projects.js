import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import profilePicture from './deona1.jpg'
import './Projects.css'

class Projects extends Component {
  render() {
    return (
      <div>

        <Route path="/projects" render={() => (
          <div className="centered">
            <div className="cards">
              <article className="card">
                  <div className="img-container">
                      <img src={profilePicture} alt="deona" />
                  </div>
                  <h2 className="title">Restaurant Reviews</h2>
                  <div className="card-info-container">
                      <p className="card-content">
                      is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since 
                      the 1500s, when an unknown printer took a galley of type and  
                      is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since 
                      the 1500s, when an unknown printer took a galley of type and  
                      </p>
                  </div>
              </article>
            </div>
          </div>
        )} />
        
      </div>
    );
  }
}

export default Projects;
