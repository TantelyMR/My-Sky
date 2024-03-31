import React from 'react';

//import './Home.css'

import { NavLink } from 'react-router-dom';

  function Home() {
    return (
    <main id = "home">
      <h2>Welcome!</h2>
      <p id = "small-message">My name is <NavLink to="/about" id="name">Tantely Matthieu R.</NavLink><br/><br/>
      I'm a passionate Full-Stack developer dedicated to building <br/>seamless and dynamic digital experiences. <br/><br/>
      My projects are crafted with precision and a deep understanding <br/>of both front-end aesthetics and back-end functionality. <br/><br/>
      I'd love to hear from you and any exciting projects that we can work on. <br/><br/>
      --^.^--</p>
      <p id = "background-credit">Wall Pic by &copy;Patrick Tomaso</p>
    </main>
    );
  }

export default Home;