import React from 'react';

import './About.css';

  function About() {
    return (
    <main id = "about">
      <h4 tabIndex="0">About Me:</h4>
      <ul>
      <li id= "foundation">
      <h3 tabIndex="0">Educational Foundation & Professional Journey</h3>
      <p>My journey as a software engineer is rooted in a strong educational background, including: 
        <br/>-a Certificate in Full-Stack Software Engineering (2023) from Codecademy,
        <br/>-a Bachelor's in Economics (2014) from Temple University,
        <br/>-an ongoing M.B.A. at American University (2024) following.
        <br/>
        This blend of technical and business education has been fundamental in shaping my approach to software development.</p>
      </li>

      <li id = "skill set">
      <h3 tabIndex="0">Building a Versatile Skill Set</h3>
      <p>My work history is a testament to versatility and growth.<br/> I was a Procurement Manager at WD Advanced Materials (2017-2020), and a Logistics Analyst at VFG Technology (2014-2017), where I honed my analytical and process optimization skills.<br/> I was lucky to have the time and resources to transition into the tech world from 2020. <br/>I pivoted to technology, driven by a passion for innovation and a vision for integrating my supply chain expertise, team collaboration & management, with cutting-edge software development. </p>
      </li>
      <li id = "interests-hobbies">
      <h3>Interests & Hobbies</h3>
      <p>On my free time, I really enjoy traveling (week-end roadtrips, museums or fly overseas...) and taking pictures with Fuji-XT3. <br/>
      I have a passion for music production as well, I mostly use an electric guitar, and a keyboard/piano (and of course the PC) to play with all kinds of music.<br/>I also really enjoy boardgames, and (by extension maybe) RTS and RPG games on PC.</p>
      </li>
      </ul>
    </main>
    );
  }

export default About;