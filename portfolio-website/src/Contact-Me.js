import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './Contact-Me.css'

class ContactMe extends Component {
  render() {
    return (
      <div>
        <Route path="/contact-me" render={() => (
          <div className="centered">
            <div className="contact-me-wrapper">

              <div className="container1">
                <div className="container1-heading-container">
                  <h2 className="contact-me-header">Lets Talk About</h2>
                  <h4 className="contact-me-about-text">Job Opprotunites</h4>
                </div>
                <div className="container1-contact-info-container">
                  <p>Email me at: something@gmail.com</p> 
                  <p>Follow me on Github</p> 
                  <p>Follow me on LinkedIn</p>  
                </div>
              </div>

              <div className="container2">
                <div className="contact-form-group">
                  <form action="" method="post" id="contact-form">
                      <div>
                        <label for="first_name">First Name</label>
                        <input type="text" id="first_name" placeholder="first name" name="user_first_name" />
                      </div>
                      <div>
                          <label for="last_name">Last Name</label>
                          <input type="text" id="last_name" placeholder="last name" name="user_last_name" />
                        </div>
                      <div>
                        <label for="mail">Email</label>
                        <input type="email" id="mail" placeholder="email" name="user_mail" />
                      </div>
                      <div>
                        <label for="msg">Message</label>
                        <textarea id="msg" placeholder="please type your message here..." name="user_message"></textarea>
                      </div>
                      <button type="submit" name="submit" id="submit">Submit</button>
                    </form>
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
