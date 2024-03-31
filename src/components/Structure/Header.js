import React from 'react';
import { NavLink } from 'react-router-dom';
//import './HeaderAndNav.css';

  function Header() {
    return (
    <div id = "header">
    <h1><span id="at">@</span>Matt's Sky<span id="dot">.</span>__<span class="bracket">[</span><span id="infinity">∞</span><span class="bracket">]</span>__</h1>
    <ul id = "topnav">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/skills">Skills & Tech</NavLink></li>
    </ul>
    </div>
    );
  }

export default Header;