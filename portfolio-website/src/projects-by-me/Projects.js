import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Card from '../Card'
// import Card from '../Card'
import './Projects.css'

class Projects extends Component {
  render() {
    return (
      <div>
        <Route path="/projects" render={() => (
          <div className="centered">
            <div className="cards">
              {this.props.projects.map((project) => (
                  <Card cardData={project} key={project.id}></Card>
              ))}
            </div>
          </div>
        )} />
      </div>
    );
  }
}

export default Projects;
