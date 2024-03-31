import React from 'react';

import reactLogo from '../../assets/images/react-logo.png';
import javascriptLogo from '../../assets/images/javascript-logo.png';
import typescriptLogo from '../../assets/images/typescript-logo.png';
import sassLogo from '../../assets/images/sass-logo.png';
import gptLogo from '../../assets/images/gpt-logo.png';
import githubLogo from '../../assets/images/github-logo.png';
import htmlLogo from '../../assets/images/html5-logo.png';
import pythonLogo from '../../assets/images/python-logo.png';
import mongoLogo from '../../assets/images/mongo-logo.png';
import postgreLogo from '../../assets/images/postgre-logo.png';
import nodeLogo from '../../assets/images/node-logo.png';
import expressLogo from '../../assets/images/express-logo.png';
import gitLogo from '../../assets/images/git-logo.png';

//import './Skills.css';

function showFigCaption(event) {
  const figcaption = event.currentTarget.querySelector('figcaption');
  const image = event.currentTarget.querySelector('img');
  if (figcaption) {
    figcaption.style.opacity = '1';
    figcaption.style.transition = '1s ease';
    image.style.filter = 'grayscale(0)';
  }
}

function hideFigCaption(event) {
  const figcaption = event.currentTarget.querySelector('figcaption');
  const image = event.currentTarget.querySelector('img');
  if (figcaption) {
    figcaption.style.opacity = '0%';
    image.style.filter = 'grayscale(100)';
  }
}

function Skills() {

    return (
    <main id = "skills-tech">
      <div id="skill">
        <ul>
          <li>
        <h4 tabIndex="0">ε-Front-End:</h4> 
            <p>I do my best to blend creativity with technical prowess.<br/>My Proficiency in tech such as React.js, HTML, and CSS allow me to develop visually appealing and user-friendly interfaces. I'm dedicated to crafting solutions that balance aesthetic appeal with functional design, making every application I develop not just a tool, but an engaging experience.</p>
            <div class= "skill-figure">
            <figure
  tabIndex="0" 
  onFocus={showFigCaption} 
  onBlur={hideFigCaption}  onMouseOver={showFigCaption} onMouseOut={hideFigCaption} id="react">
              <img src={reactLogo} alt="futurist React & R.Native logo"/>
              <figcaption>#React.js</figcaption>
            </figure>
            <figure
  tabIndex="0" 
  onFocus={showFigCaption} 
  onBlur={hideFigCaption}  onMouseOver={showFigCaption} onMouseOut={hideFigCaption} id="javascript">
              <img src={javascriptLogo}alt="futurist JavaScript logo"/>
              <figcaption>#JavaScript</figcaption>
            </figure>
            <figure
  tabIndex="0" 
  onFocus={showFigCaption} 
  onBlur={hideFigCaption}  onMouseOver={showFigCaption} onMouseOut={hideFigCaption} id="typescript">
              <img src={typescriptLogo} alt="futurist TypeScript logo"/>
              <figcaption>#TypeScript</figcaption>
            </figure>
            <figure
  tabIndex="0" 
  onFocus={showFigCaption} 
  onBlur={hideFigCaption}  onMouseOver={showFigCaption} onMouseOut={hideFigCaption} id="sass">
              <img src={sassLogo} alt="futurist Sass logo"/>
              <figcaption>#CSS</figcaption>
            </figure>
            <figure
  tabIndex="0" 
  onFocus={showFigCaption} 
  onBlur={hideFigCaption}  onMouseOver={showFigCaption} onMouseOut={hideFigCaption} id="gpt">
              <img src={gptLogo} alt="futurist gpt logo"/>
              <figcaption>#GPT</figcaption>
            </figure>
            <figure
  tabIndex="0" 
  onFocus={showFigCaption} 
  onBlur={hideFigCaption}  onMouseOver={showFigCaption} onMouseOut={hideFigCaption} id="html">
              <img src={htmlLogo} alt="futurist html logo"/>
              <figcaption>#HTML5</figcaption>
            </figure>
            </div>
          </li>

          <li>
            <h4 tabIndex="0">ε-Back-End:</h4>
            <p>My back-end skills are anchored in Node.js and Express.js, complemented by a strong foundation in PostgreSQL(sometimes Mongo) and Python for data handling and analysis. <br/> I enjoy designing and constructing APIs that are efficient, secure, and scalable, essential for robust back-end systems. I focus on developing back-ends that empower and enrich front-end experiences, seamlessly integrating various components to create unified and effective digital ecosystems.</p>
            <div class= "skill-figure">
            <figure
  tabIndex="0" 
  onFocus={showFigCaption} 
  onBlur={hideFigCaption}  onMouseOver={showFigCaption} onMouseOut={hideFigCaption} id="python">
              <img src={pythonLogo} alt="futurist Python logo"/>
              <figcaption>#Python</figcaption>
            </figure>
            <figure
  tabIndex="0" 
  onFocus={showFigCaption} 
  onBlur={hideFigCaption}  onMouseOver={showFigCaption} onMouseOut={hideFigCaption} id="mongodb">
              <img src={mongoLogo} alt="futurist MongoDB logo"/>
              <figcaption>#MongoDB</figcaption>
            </figure>
            <figure
  tabIndex="0" 
  onFocus={showFigCaption} 
  onBlur={hideFigCaption}  onMouseOver={showFigCaption} onMouseOut={hideFigCaption} id="postgresql">
              <img src={postgreLogo} alt="futurist PostgreSQL logo"/>
              <figcaption>#PostgreSQL</figcaption>
            </figure>
            <figure
  tabIndex="0" 
  onFocus={showFigCaption} 
  onBlur={hideFigCaption}  onMouseOver={showFigCaption} onMouseOut={hideFigCaption} id="node">
              <img src={nodeLogo} alt="futurist node logo"/>
              <figcaption>#Node.js</figcaption>
            </figure>
            <figure
  tabIndex="0" 
  onFocus={showFigCaption} 
  onBlur={hideFigCaption}  onMouseOver={showFigCaption} onMouseOut={hideFigCaption} id="express">
              <img src={expressLogo} alt="futurist express logo"/>
              <figcaption>#Express.js</figcaption>
            </figure>
            <figure
  tabIndex="0" 
  onFocus={showFigCaption} 
  onBlur={hideFigCaption}  onMouseOver={showFigCaption} onMouseOut={hideFigCaption} id="git">
              <img src={gitLogo} alt="futurist Git logo"/>
              <figcaption>#Git</figcaption>
            </figure>
            <figure
  tabIndex="0" 
  onFocus={showFigCaption} 
  onBlur={hideFigCaption}  onMouseOver={showFigCaption} onMouseOut={hideFigCaption} id="github">
              <img src={githubLogo} alt="futurist Github logo"/>
              <figcaption>#Github</figcaption>
            </figure>
            </div>
          </li>
          <li>
        <h4 tabIndex="0">ε-Soft Skills:</h4>
        <p>My career reflects many other skills cultivated in varied multicultural settings. As a tri-lingual communicator in English, French, and Malagasy, I'm used to bridge cultural gap even when a common medium isn't always obvious to promote an inclusive work environment. Skilled in problem-solving and process optimization from supply chain, I bring efficiency and innovation to projects. I also have experience in team & resource management to drive productivy while balancing quality and efficiency.</p>
      </li>
        </ul>

      </div>
    </main>
    );
  }

export default Skills;