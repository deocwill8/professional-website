import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import SideBar from '../components/sidebar/sidebar'
import CircleIcon from '../components/social/icon'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import { IconContext } from "react-icons";
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaEnvelopeOpenText }  from 'react-icons/fa'
import './Contact-Me.css'


class ContactMe extends Component {

  constructor(props){
    super(props)
    this.state = {
      sender_first_name: "",
      sender_last_name: "",
      sender_mail: "",
      sender_message: "",
      timeInterval: 1500,
      wordIdx: 0
    }
  }



  handleForm = e => {
    axios.post ("https://formcarry.com/s/fAi3QyjgPQb",
    this.state,
    {
      headers: {"Accept": "application/json"}}
      ).then(function(response){
        console.log(response);
      }).catch(function(error){
        console.log(error);
      })
      e.preventDefault();

  }

  handleFields = e => {
    this.setState({[e.target.name]: e.target.value})
    // console.log(e.target)
  }

  render() {

    return (

      <div id="contactMe">
      <Navbar />
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"contactMe"} />
        <Route path="/contact-me" render={() => (
          <div id="page-wrap">
            <div className="contact-me-wrapper">
              <div className="contact-content-container">
            {/* container 1 */}

              <div className="container1">
                <div className="container1-heading-container">
                  <h2 className="heading-title">Let's keep in touch!</h2>
                  <h4>I will be sure to reply back to you!</h4>
                </div>
                <div className="container1-contact-info-container">
                <CircleIcon />
                  <IconContext.Provider value={{ size: '20px' }}>
                    <div>
                      <p> <FaEnvelopeOpenText /> something@gmail.com</p> 
                      <p>Follow @ <FaGithubSquare /> </p> 
                      <p>Follow @ <FaLinkedin /></p>  
                    </div>
                  </IconContext.Provider>
                </div>
              </div>

              {/* container 2 */}
              <div className="container2">
                <div className="contact-form-group">
                  <form onSubmit={this.handleForm} id="contact-form">
                    <TextField 
                      id="first_name" 
                      label="First Name" 
                      placeholder="First Name"
                      className="contact-form-input"
                      onChange={this.handleFields}
                    />
                    <TextField 
                      id="last_name" 
                      label="Last Name" 
                      placeholder="Last Name"
                      className="contact-form-input"
                      onChange={this.handleFields}
                    />
                    <TextField 
                      id="mail" 
                      label="Email" 
                      autoComplete="email"
                      type="email"
                      placeholder="Email"
                      className="contact-form-input"
                      onChange={this.handleFields}
                    />
                    <TextField
                      id="msg"
                      label="Message"
                      onChange={this.handleFields}
                      className="contact-form-input"
                      placeholder="Message"
                      multiline
                    />
                    <Button variant="contained" color="primary">Submit</Button>
                    </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    )} />  
  </div>
    );
  }
}

export default ContactMe;
