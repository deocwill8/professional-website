import React from "react";
import { slide as Menu } from "react-burger-menu";
import './sidebar.css'

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about-me">
       About Me
      </a>

      <a className="menu-item" href="/projects">
        Projects
      </a>

      <a className="menu-item" href="/contact-me">
        Contact Me
      </a>
    </Menu>
  );
};