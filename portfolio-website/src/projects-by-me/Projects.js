import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import SideBar from '../components/sidebar/sidebar'
import Card from '../Card'
// import Card from '../Card'
import './Projects.css'

class Projects extends Component {
  render() {
    return (
      <div id="projects" className="centered">
        <Navbar />
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"projects"} />
        <Route path="/projects" render={() => (
          <div id="page-wrap" className="center-cards"> 
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
