import React from 'react';
import githubLogo from '../../assets/images/github-logo.png';
import linkedInLogo from '../../assets/images/linkedin-logo.png';
import emailLogo from '../../assets/images/email-logo.png';
import { Link, NavLink } from 'react-router-dom';

//import './Footer.css';

  function Footer() {
    return (
    <div id = "footer">
      <ul id = "sidenav">
      <li><NavLink to="/about">About Me</NavLink></li>
      <li><NavLink to="/projects">Projects</NavLink></li>
    </ul>
    <div id = "buffer"></div>
    <div id = "contact">
    <h3>Contact:</h3>
    <ul id = "contacts">
      <li><Link to ="mailto:tantely.m.ra@gmail.com" target="_blank" title="E-mail Address"><img src={emailLogo} alt='email-logo'/></Link></li>
      <li><Link to ="https://github.com/TantelyMR" target="_blank" title="Github Profile">
        <img src={githubLogo} alt='github-logo'/></Link></li>
      <li><Link to ="https://www.linkedin.com/in/tantely-matthieu/" target="_blank" title="Linked Profile"><img src={linkedInLogo} alt='linkedIn-logo'/></Link></li>
    </ul>
    </div>
    </div>
    );
  }

export default Footer;