import { useState } from "react";
import ProfilePic from "../assets/images/picture-glasses.png"; // real image
import ProfileComPic from "../assets/images/picture3.png"; // cartoon image
import TechPic from "../assets/images/techs2.png";

import './Welcome.css';

function Welcome({ welcomeRef, scrollToSection }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div id="welcome" className="section" ref={welcomeRef}>
      <div className="profile-container">
        <div className="profile-text">
          <h2 className="software-title" onClick={() => scrollToSection("skills")}>
            <strong>[ </strong>
            <span className="rainbow">S</span>
            <span className="rainbow">o</span>
            <span className="rainbow">f</span>
            <span className="rainbow">t</span>
            <span className="rainbow">w</span>
            <span className="rainbow">a</span>
            <span className="rainbow">r</span>
            <span className="rainbow">e</span>
            <span> Engineer</span>
            <strong> ]</strong>
          </h2>
          <h3>
            Tantely Matthieu
            <br />
            Rabemananjara
          </h3>
        </div>

        <div
          className="profile-pic-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={ProfileComPic}
            alt="Cartoon Tantely"
            className={`profile-pic ${!hovered ? "visible" : "hidden"}`}
          />
          <img
            src={ProfilePic}
            alt="Real Tantely"
            className={`profile-pic ${hovered ? "visible" : "hidden"}`}
          />
        </div>

      </div>

      <div className="tech-pic-container">
        <img src={TechPic} alt="tech icons" className="tech-pic" />
      </div>

      <div>
        <p className="welcome-text">
          Welcome! <br />I'm Tantely, you can also call me Matt, a developer with a passion for building efficient programs and creating innovative solutions.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
