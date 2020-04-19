import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { IconContext } from "react-icons";
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaEnvelopeOpenText }  from 'react-icons/fa'
import { icons } from 'react-icons/lib/cjs';
import './icon.css'

class Icon extends Component {
    render() {
      return (
      <div className="circle">
          <i class="fas fa-camera fa-xs"></i>
      </div>
      );
    }
  }
  
  export default Icon;

