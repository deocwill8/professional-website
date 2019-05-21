import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import SideBar from '../components/sidebar/sidebar'
import axios from 'axios'
import './Contact-Me.css'

const textArray = ['eat', 'sleep', 'drink', 'snore', 'foo', 'buzz', 'whatever'];


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

  componentDidMount() {
    this.shuffleText = setInterval(() => {
      let currentWordtIdx = this.state.wordIdx
      this.setState({ wordIdx : currentWordtIdx + 1 })
    }, this.state.timeInterval)
  }

  componentWillUnmount() {
    clearInterval(this.shuffleText)
  }

  render() {
    let textThatChanges = textArray[this.state.wordIdx % textArray.length];
    // let textThatChanges = this.props.wordAnimations.contactMeFor[this.state.wordIdx % this.props.wordAnimations.contactMeFor.length];

    return (
      <div id="contactMe">
      <Navbar />
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"contactMe"} />
        <Route path="/contact-me" render={() => (
          <div id="page-wrap">
            <div className="contact-me-wrapper">
              <div className="contact-page-title">
                <h1>About</h1>
                <hr className="divider"></hr>
              </div>
              <div className="contact-content-container">
            {/* container 1 */}

              <div className="container1">
                <div className="container1-heading-container">
                  <h2 className="contact-me-header">Lets Talk About</h2>
                  <h4 className="contact-me-about-text">{textThatChanges}</h4>
                </div>
                <div className="container1-contact-info-container">
                  <p>Email me at: something@gmail.com</p> 
                  <p>Follow me on Github</p> 
                  <p>Follow me on LinkedIn</p>  
                </div>
              </div>

              {/* container 2 */}
              <div className="container2">
                <div className="contact-form-group">
                  <form onSubmit={this.handleForm} id="contact-form">
                      <div>
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" id="first_name" placeholder="first name" name="sender_first_name" onChange={this.handleFields} />
                      </div>
                      <div>
                          <label htmlFor="last_name">Last Name</label>
                          <input type="text" id="last_name" placeholder="last name" name="sender_last_name" onChange={this.handleFields} />
                        </div>
                      <div>
                        <label htmlFor="mail">Email</label>
                        <input type="email" id="mail" placeholder="email" name="sender_mail" onChange={this.handleFields} />
                      </div>
                      <div>
                        <label htmlFor="msg">Message</label>
                        <textarea id="msg" placeholder="please type your message here..." name="sender_message" onChange={this.handleFields}></textarea>
                      </div>
                      <button type="submit" name="submit" id="submit">Submit</button>
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
