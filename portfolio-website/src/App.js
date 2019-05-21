import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import AboutMe from './about-me/About-Me'
import Projects from './projects-by-me/Projects'
import ContactMe from './contact-me/Contact-Me'
import data from './data/projects.json';
import cmfWords from './data/contact-me-for.json'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      projectData: data,
      words: cmfWords
    }
  }

  render() {
    return (
      <Router>
        <div id="mainContainer">
          <Route exact path="/" component={Home} />
          <Route path="/about-me" component={AboutMe} />
          <Route 
            path="/contact-me" 
            render={ (props) => <ContactMe {...props} wordAnimations={this.state.words.contactMeFor} />} 
           />
          <Route
            path="/projects"
            render={ (props) => <Projects {...props} projects={this.state.projectData.projects} />}
          />
        </div>
      </Router>

    );
  }
}

export default App;
