import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
    <div className="header">
        <h1 className="logo">
            Deona Williams
        </h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about-me">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact-me">Contact</a></li>
            </ul>
        </nav>
    </div>
    );
  }
}

export default Navbar;
