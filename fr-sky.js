/* eslint-disable max-lines-per-function */
// Function to transform the content to French
function transformToFrench() {
  const translatedContent = `
  <!DOCTYPE html>
  <html lang="fr">
    <head>
  
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
  
      <link rel="stylesheet" type="text/css" href="sky.css">
      <script type="text/javascript" src="sky.js" defer></script>
      <script type="text/javascript" src="fr-sky.js" async></script>
      
  
      <link rel="title icon" href="resources/images/sky-logo.png" type="image/x-icon">
      <title>Sky</title>
  
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:ital@0;1&family=League+Script&family=Poiret+One&family=Raleway+Dots&family=Raleway:ital@0;1&family=Rouge+Script&family=Rubik+Moonrocks&family=Sacramento&family=Tourney&display=swap" rel="stylesheet">
  
    </head>
  
    <body>
      <nav id="top-nav" role="main navigation">
        <div class="widget" id="my-icon">
          <div><span id="at">@</span><span id="matt">Matt's Sky</span><span id="dot">.</span><span id="bracket">__[<span id="infinity">∞</span>]__</span></div>
        </div>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#skill-tech-title" id="skill-nav">Compétences & Technologie</a></li>
          <li><a href="#experience-title" id="exp-nav">Projets</a></li>
        </ul>
        <div class="widget" id="side-button">
          <div id="music" role="music widget"><img src="resources/images/play-button.png" alt="jouer de la musique"></div>
          <audio id="audioPlayer" controls>
            <source src="resources/audio/return-of-kings.mp3" type="audio/mpeg">
        </audio>
          <div id="language" role="language widget"><img src="resources/images/language-button.png" alt="changement de langue"></div>
        </div>
      </nav>
  
      <header>
  
        <h1>Bienvenue!</h1>
        <p>
          <span>Je</span> <span>m'</span><span>a</span><span>p</span><span>p</span><span>e</span><span>l</span><span>l</span><span>e</span> <span id="name">Tantely Matthieu</span>, <span>v</span><span>o</span><span>u</span><span>s</span> <span>p</span><span>o</span><span>u</span><span>v</span><span>e</span><span>z</span> <span id="nickname">Matt</span><span>,</span><br/><span>b</span><span>o</span><span>n</span><span>n</span><span>e</span> <span>v</span><span>i</span><span>s</span><span>i</span><span>t</span><span>e</span> <span>s</span><span>u</span><span>r</span> <span>m</span><span>o</span><span>n</span> <span>s</span><span>i</span><span>t</span><span>e</span> <span>d</span><span>e</span> <span>d</span><span>é</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>p</span><span>e</span><span>u</span><span>r</span><span>!</span>
        </p>
        <a href="https://unsplash.com/@impatrickt" id="p-credit">Image par Patrick Tomaso</a>

      </header>
      <div id="side-bar" role="background contacts & resume">
          <div id="me">
            <h4>About Me</h4><div class="sub-side">
            <p><span id="hi">Salut !</span><br/><br/>Je suis un magicien (aka développeur) de logiciel, tissant des expériences numériques avec une attention spéciale sur <span>l'interactivité</span> et <span>l'accessibilité</span>. Le plaisir et la fonctionnalité vont de pair dans mon univers, car je pense que toutes les applications doivent avoir des <span>fonctionnalités puissantes</span> tout en restant amusantes et accessibles.<br/><br/>Depuis mes jours d'expert en logistique et en économie, j'apporte l'art de l'<span>organisation</span>, de l'<span>efficacité</span> et de la prise de décision basée sur les <span>données</span> à mes aventures de programming.<br/><br/>La programmation m'a trouvé lorsque mon ancienne entreprise avait besoin de plus d'automatisation et de numérisation, et ma passion n'a jamais diminué depuis.<br/><br/>
            J'aime aussi beaucoup prendre des <a href="https://www.flickr.com/photos/skytristan/" aria-label="page flickr">photos</a> et produire de la musique <span>-𝄞:♯♪♫♬</span> lorsque l'inspiration frappe.<br/>Je suis ambitieux et désireux de relever des projets innovants et/ou de rejoindre une entreprise pour créer des fonctionnalités impactantes.<br/><br/>Profitez de votre visite ici et restons en contact! <br/><br/><span id="bye">Matt ^.^</span></p></div>
          </div>
          <div id="my-contact">
            <h4>Liens de contacts</h4><div class="sub-side">
            <ul>
              <li><a href="mailto:tantely.m.ra@gmail.com" role="e-mail address"><img src="resources/images/at-logo.png" alt="icône @"></a></li>
              <li><a href="https://www.linkedin.com/in/tantely-matthieu/" role="linkedin contact"><img src="resources/images/linkedin-logo.png" alt="icône linkedin"></a></li>
              <li><a href="https://github.com/TantelyMR" role="github contact"><img src="resources/images/github-logo.png" alt="icône github"></a>
              </li>
            </ul></div>
          </div>
          <div id="education"><h4>Éducation</h4><div class="sub-side"><p>Bachelor - Temple University<br/>Certification Full-Stack - Code Academy<br/>
          Candidat MBA - American University<br/><a href="resources/doc/CV+2021+M5.pdf" target="_blank">CV</a></p></div>
          </div>
      </div>
     
      <main>
        <h2 id="skill-tech-title">Compétences & Technologies</h2>
        <section id="skill-tech">
          <h3>Technologie</h3>
          <div id="technology" tabindex="0">
            
            <figure>
              <img src="resources/images/mongo-logo.png" alt="logo futuriste de MongoDB">
              <figcaption>MongoDB</figcaption>
            </figure>
            <figure>
              <img src="resources/images/express-logo.png" alt="logo futuriste d'Express.js">
              <figcaption>Express.js</figcaption>
            </figure>
            <figure>
              <img src="resources/images/react-logo.png" alt="logo futuriste de React & R.Native">
              <figcaption>React & R.Native</figcaption>
            </figure>
            <figure>
              <img src="resources/images/node-logo.png" alt="logo futuriste de Node.js">
              <figcaption>Node.js</figcaption>
            </figure>
            <figure>
              <img src="resources/images/redux-logo.png" alt="logo futuriste de Redux">
              <figcaption>Redux</figcaption>
            </figure>
            <figure>
              <img src="resources/images/python-logo.png" alt="logo futuriste de Python">
              <figcaption>Python</figcaption>
            </figure>
            <figure>
              <img src="resources/images/postgre-logo.png" alt="logo futuriste de PostgreSQL">
              <figcaption>PostgreSQL</figcaption>
            </figure>
            <figure>
              <img src="resources/images/typescript-logo.png" alt="logo futuriste de TypeScript">
              <figcaption>TypeScript</figcaption>
            </figure>
            <figure>
              <img src="resources/images/sass-logo.png" alt="logo futuriste de Sass">
              <figcaption>Sass</figcaption>
            </figure>
            <figure>
              <img src="resources/images/azure-logo.png" alt="logo futuriste de MS Azure">
              <figcaption>MS Azure</figcaption>
            </figure>
            <figure>
              <img src="resources/images/aws-logo.png" alt="logo futuriste d'AWS">
              <figcaption>AWS</figcaption>
            </figure>
            <figure>
              <img src="resources/images/git-logo.png" alt="logo futuriste de Git">
              <figcaption>Git</figcaption>
            </figure>
            <figure>
              <img src="resources/images/github-logo.png" alt="logo futuriste de Github">
              <figcaption>Github</figcaption>
            </figure>
            <figure>
              <img src="resources/images/gpt-logo.png" alt="logo futuriste de GPT">
              <figcaption>GPT</figcaption>
            </figure>
            <figure>
              <img src="resources/images/html5-logo.png" alt="logo futuriste de HTML5">
              <figcaption>HTML5</figcaption>
            </figure>
            <figure>
              <img src="resources/images/javascript-logo.png" alt="logo futuriste de JavaScript">
              <figcaption>JavaScript</figcaption>
            </figure>
          </div>
  
          <h3>Compétences</h3>
          <div id="skill">
  
            <ul>
              <li>
                <h4>o-Front-End</h4>
                <p>J'aime créer des expériences digitals avec une attention particulière sur l'interactivité et l'accessibilité. De la conception des wireframes jusqu'à la publication, je m'assure que chaque étape du processus est aussi organisée et élégante que le produit lui-même, afin que la maintenance et les améliorations futures se déroulent toujours en douceur et de manière efficace.</p>
                <figure id="react">
                  <img src="resources/images/react-logo.png" alt="logo futuriste de React & R.Native">
                  <figcaption>#React</figcaption>
                </figure>
                <figure id="redux">
                  <img src="resources/images/redux-logo.png" alt="logo futuriste de Redux">
                  <figcaption>#Redux</figcaption>
                </figure>
                <figure id="javascript">
                  <img src="resources/images/javascript-logo.png" alt="logo futuriste de JavaScript">
                  <figcaption>#JavaScript</figcaption>
                </figure>
                <figure id="typescript">
                  <img src="resources/images/typescript-logo.png" alt="logo futuriste de TypeScript">
                  <figcaption>#TypeScript</figcaption>
                </figure>
                <figure id="sass">
                  <img src="resources/images/sass-logo.png" alt="logo futuriste de Sass">
                  <figcaption>#Sass</figcaption>
                </figure>
                <figure id="gpt">
                  <img src="resources/images/gpt-logo.png" alt="logo futuriste de GPT">
                  <figcaption>#GPT</figcaption>
                </figure>
                <figure id="github">
                  <img src="resources/images/github-logo.png" alt="logo futuriste de Github">
                  <figcaption>#Github</figcaption>
                </figure>
              </li>
            
              <li>
                <h4>o-Back-End & Données</h4>
                <p>Avec des influences de mon expérience en économie et logistique, je sais construire et connecter le back-end de manière transparente au front-end pour un processus fluide et efficace de création de fonctionnalités et d'expériences basées sur de bons données. De plus, je suis familier avec les technologies cloud comme Azure et AWS pour tirer parti de la scalabilité.</p>
                <figure id="python">
                  <img src="resources/images/python-logo.png" alt="logo futuriste de Python">
                  <figcaption>#Python</figcaption>
                </figure>
                <figure id="mongodb">
                  <img src="resources/images/mongo-logo.png" alt="logo futuriste de MongoDB">
                  <figcaption>#MongoDB</figcaption>
                </figure>
                <figure id="postgresql">
                  <img src="resources/images/postgre-logo.png" alt="logo futuriste de PostgreSQL">
                  <figcaption>#PostgreSQL</figcaption>
                </figure>
                <figure id="azure">
                  <img src="resources/images/azure-logo.png" alt="logo futuriste de MS Azure">
                  <figcaption>#MS Azure</figcaption>
                </figure>
                <figure id="aws">
                  <img src="resources/images/aws-logo.png" alt="logo futuriste d'AWS">
                  <figcaption>#AWS</figcaption>
                </figure>
                <figure>
                  <img src="resources/images/node-logo.png" alt="logo futuriste de Node.js">
                  <figcaption>#Node.js</figcaption>
                </figure>
                <figure id="git">
                  <img src="resources/images/git-logo.png" alt="logo futuriste de Git">
                  <figcaption>#Git</figcaption>
                </figure>
                <figure>
                  <img src="resources/images/express-logo.png" alt="logo futuriste d'Express.js">
                  <figcaption>#Express,js</figcaption>
                </figure>
                
              
              </li>
            
              <li>
                <h4>o-Mobile/Cross-Platform</h4>
                <p>Comme l'accessibilité est une priorité pour moi et mes clients, il m'a toujours été important d'acquérir les compétences pour déployer une application sur plusieurs plates-formes.</p>
                <figure id="react-native">
                  <img src="resources/images/react-logo.png" alt="logo futuriste de React & R.Native">
                  <figcaption>#React.Native</figcaption>
                </figure>
                <figure id="gpt">
                  <img src="resources/images/gpt-logo.png" alt="logo futuriste de GPT">
                  <figcaption>#GPT</figcaption>
                </figure>
                <figure id="azure">
                  <img src="resources/images/azure-logo.png" alt="logo futuriste de MS Azure">
                  <figcaption>#MS Azure</figcaption>
                </figure>
                <figure id="aws">
                  <img src="resources/images/aws-logo.png" alt="logo futuriste d'AWS">
                  <figcaption>#AWS</figcaption>
              </li>
            </ul>
      
          </div>
        </section>
  
        <h2 id="experience-title">Travail & Projets</h2>
        <section id="experience">
          
          <div id="netrica">
            <figure>
              <img src="resources/images/netrica.png" alt="page d'accueil web de Netrica">
              <figcaption>Prototype d'application Web de Netrica pour le réseautage d'entreprises et les services.</figcaption>
            </figure>
          </div>
  
          <div id="gundam">
            <figure>
              <img src="resources/images/gundam.png" alt="page d'accueil web de Gundam Builder">
              <figcaption>Un jeu Web où nous pouvons créer des Gundam personnalisés et des équipes de Mobile Suit pour les combats.</figcaption>
            </figure>
            <p></p>
          </div>
        </section>
      </main>
  
      <footer>
  
        <div id="contacts">
  
          <form action="hub/formal.html" method="POST">
          <div id = "messaging" role="message box">
            <label for="message-me">Contacts :</label><br/>
            <textarea id="message-me" placeholder="Votre message :)
            "></textarea>
          </div>
          </form>
          
          <ul>
            <li><a href="mailto:tantely.m.ra@gmail.com" role="adresse e-mail"><img src="resources/images/at-logo.png" alt="@-icon"></a></li>
            <li><a href="https://www.linkedin.com/in/tantely-matthieu/" role="contact LinkedIn"><img src="resources/images/linkedin-logo.png" alt="icône LinkedIn"></a></li>
            <li><a href="https://github.com/TantelyMR" role="contact Github"><img src="resources/images/github-logo.png" alt="icône Github"></a></li>
          </ul>
          
        </div>
        <p id="last-message"><span>E</span><span>n</span><span>v</span><span>o</span><span>y</span><span>-</span><span>m</span><span>o</span><span>i</span><span> </span><span>u</span><span>n</span><span> </span><span>m</span><span>e</span><span>s</span><span>s</span><span>a</span><span>g</span><span>e</span><span> </span><span>s</span><span>i</span><span>l</span></br><span> </span><span>v</span><span>o</span><span>u</span><span>s</span><span> </span><span>a</span><span>v</span><span>e</span><span>z</span><span> </span><span>d</span><span>e</span><span>s</span><span> </span><span>i</span><span>d</span><span>é</span><span>e</span><span>s</span><span>,</span><span> </span><span>v</span><span>o</span><span>u</span><span>l</span><span>e</span><span>z</span><span>-</span><span>v</span><span>o</span><span>u</span><span>s</span><span> </span><span>c</span><span>o</span><span>l</span><span>l</span><span>a</span><span>b</span><span>o</span><span>r</span><span>e</span><span>r</span><span>,</span><span></span><span>o</span><span>u</span><span> </span><span>j</span><span>u</span><span>s</span><span>t</span><span>e</span><span> </span><span>p</span><span>a</span><span>r</span><span>l</span><span>e</span><span>r</span> <span>u</span><span>n</span> <span>p</span><span>e</span><span>u</span><span>!</span></p>
  
        <div id="show" aria-label="show et animation interactive supplémentaires">
        <!--<div id="dark"><div id="music-play" style="display: none;"></div></div>-->
        <img src="resources/images/mohammad-alizade-bg.webp" alt="quelque chose de cool"></div>
      </footer>
      <p id="copyright"><span>&copy; Tantely Matthieu 2023</span></p>
    </body>
  </html>
  `;

  // Update the document's content with the translated content
  document.documentElement.innerHTML = translatedContent;
}

// Function to transform the content to English
function transformToEnglish() {
  const englishContent = `
  <!DOCTYPE html>
<html lang="en">
  <head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css"  href="sky.css">
    <script type="text/javascript" src="sky.js" defer></script>
    <script type="text/javascript" src="fr-sky.js" async></script>
    

    <link rel="title icon" href="resources/images/sky-logo.png" type="image/x-icon">
    <title>Sky</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:ital@0;1&family=League+Script&family=Poiret+One&family=Raleway+Dots&family=Raleway:ital@0;1&family=Rouge+Script&family=Rubik+Moonrocks&family=Sacramento&family=Tourney&display=swap" rel="stylesheet">

  </head>

  <body>
    <nav id="top-nav" role="main navigation">
      <div class="widget" id="my-icon">
        <div><span id="at">@</span><span id="matt">Matt's Sky</span><span id="dot">.</span><span id="bracket">__[<span id="infinity">∞</span>]__</span></div>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#skill-tech-title" id="skill-nav">Skills-&-Tech</a></li>
        <li><a href="#experience-title" id="exp-nav">Projects</a></li>
      </ul>
      <div class="widget" id="side-button">
        <div id="music" role="music widget"><img src="resources/images/play-button.png" alt="play music"></div>
        <audio id="audioPlayer" controls>
          <source src="resources/audio/return-of-kings.mp3" type="audio/mpeg">
      </audio>
        <div id="language" role="language widget"><img src="resources/images/language-button.png" alt="language switch"></div>
      </div>
    </nav>

    <header>

      <h1>Welcome!</h1>

      <p>
        <span>M</span><span>y</span> <span>n</span><span>a</span><span>m</span><span>e</span> <span>i</span><span>s</span> <span id="name">Tantely Matthieu</span><span>,</span> <span>y</span><span>o</span><span>u</span> <span>c</span><span>a</span><span>n</span> <span>c</span><span>a</span><span>l</span><span>l</span> <span>m</span><span>e</span> <span id="nickname">Matt</span><span>,</span><br/><span>a</span><span>n</span><span>d</span> <span>t</span><span>h</span><span>i</span><span>s</span> <span>i</span><span>s</span> <span>m</span><span>y</span> <span>S</span><span>o</span><span>f</span><span>t</span><span>w</span><span>a</span><span>r</span><span>e</span> <span>E</span><span>n</span><span>g</span><span>i</span><span>n</span><span>e</span><span>e</span><span>r</span> <span>P</span><span>o</span><span>r</span><span>t</span><span>f</span><span>o</span><span>l</span><span>i</span><span>o</span><span>.</span>
      </p>
      <a href="https://unsplash.com/@impatrickt" id="p-credit">Picture by Patrick Tomaso</a>

    </header>
    <div id="side-bar" role="background contacts & resume">
        <div id="me">
          <h4>About Me</h4><div class="sub-side">
          <p><span id="hi">Greetings!</span><br/><br/>I'm a software wizard (aka engineer), weaving digital experiences with an emphasis on <span>interactivity</span> and <span>accessibility</span>. Fun and functionality go hand-in-hand in my universe as I think all applications should have <span>powerful features</span> while still remaining fun and accessible.<br/><br/>From my days as a logistics and economics expert, I bring the art of <span>organization</span>, <span>efficiency</span> and <span>data-driven</span> decision-making to my coding adventures.<br/><br/>Programming found me when my former company needed more automation and digitization, and the passion hasn't waned ever since.<br/><br/>
          I also really enjoy taking <a href="https://www.flickr.com/photos/skytristan/" aria-label="flickr page">pictures</a> and producing music <span>-𝄞:♯♪♫♬</span> when the inspiration strikes.<br/>I'm ambitious and eager to take on innovative projects and/or join a company to create impactful features.<br/><br/>Enjoy your visit here and let's get in touch! <br/><br/><span id="bye">Matt ^.^</span></p></div>
        </div>
        <div id="my-contact">
          <h4>Contact</h4><div class="sub-side">
          <ul>
            <li><a href="mailto:tantely.m.ra@gmail.com" role="e-mail address"><img src="resources/images/at-logo.png" alt="@-icon"></a></li>
            <li><a href="https://www.linkedin.com/in/tantely-matthieu/" role="linkedin contact"><img src="resources/images/linkedin-logo.png" alt="linkedin icon"></a></li>
            <li><a href="https://github.com/TantelyMR" role="github contact"><img src="resources/images/github-logo.png" alt="github-icon"></a>
            </li>
          </ul></div>
        </div>
        <div id="education"><h4>Education</h4><div class="sub-side"><p>Bachelor's - Temple University<br/>Full-Stack Certification - Code Academy<br/>
        MBA Candidate - American University<br/><a href="resources/doc/CV+2021+M5.pdf" target="_blank">Resume</a></p></div>
        </div>
    </div>
   
    <main>
      <h2 id="skill-tech-title">Skills & Tech</h2>
      <section id="skill-tech">
        <h3>Technology</h3>
        <div id="technology" tabindex="0">
          
          <figure>
            <img src="resources/images/mongo-logo.png" alt="futurist mongodb logo">
            <figcaption>MongoDB</figcaption>
          </figure>
          <figure>
            <img src="resources/images/express-logo.png" alt="futurist express logo">
            <figcaption>Express.js</figcaption>
          </figure>
          <figure>
            <img src="resources/images/react-logo.png" alt="futurist react logo">
            <figcaption>React & R.Native</figcaption>
          </figure>
          <figure>
            <img src="resources/images/node-logo.png" alt="futurist node logo">
            <figcaption>Node.js</figcaption>
          </figure>
          <figure>
            <img src="resources/images/redux-logo.png" alt="futurist redux logo">
            <figcaption>Redux</figcaption>
          </figure>
          <figure>
            <img src="resources/images/python-logo.png" alt="futurist python3 logo">
            <figcaption>Python</figcaption>
          </figure>
          <figure>
            <img src="resources/images/postgre-logo.png" alt="futurist PostgreSQL logo">
            <figcaption>PostgreSQL</figcaption>
          </figure>
          <figure>
            <img src="resources/images/typescript-logo.png" alt="futurist TypeScript logo">
            <figcaption>TypeScript</figcaption>
          </figure>
          <figure>
            <img src="resources/images/sass-logo.png" alt="futurist Sass logo">
            <figcaption>Sass</figcaption>
          </figure>
          <figure>
            <img src="resources/images/azure-logo.png" alt="futurist azure logo">
            <figcaption>MS Azure</figcaption>
          </figure>
          <figure>
            <img src="resources/images/aws-logo.png" alt="futurist aws logo">
            <figcaption>AWS</figcaption>
          </figure>
          <figure>
            <img src="resources/images/git-logo.png" alt="futurist git logo">
            <figcaption>Git</figcaption>
          </figure>
          <figure>
            <img src="resources/images/github-logo.png" alt="futurist github logo">
            <figcaption>Github</figcaption>
          </figure>
          <figure>
            <img src="resources/images/gpt-logo.png" alt="futurist GPT logo">
            <figcaption>GPT</figcaption>
          </figure>
          <figure>
            <img src="resources/images/html5-logo.png" alt="futurist HTML5 logo">
            <figcaption>HTML5</figcaption>
          </figure>
          <figure>
            <img src="resources/images/javascript-logo.png" alt="futurist javascript logo">
            <figcaption>JavaScript</figcaption>
          </figure>
        </div>

        <h3>Skills</h3>
        <div id="skill">

          <ul>
            <li>
              <h4>o-Front-End</h4>
              <p>I like to create digital experiences with a special emphasis on interactivity and accessibility. From wireframing to publishing, I like to make sure every step of the process is as organized and elegant as the product itself, so maintenance and future improvements are always smooth and efficient.</p>
              <figure id="react">
                <img src="resources/images/react-logo.png" alt="futurist React & R.Native logo">
                <figcaption>#React</figcaption>
              </figure>
              <figure id="redux">
                <img src="resources/images/redux-logo.png" alt="futurist Redux logo">
                <figcaption>#Redux</figcaption>
              </figure>
              <figure id="javascript">
                <img src="resources/images/javascript-logo.png" alt="futurist JavaScript logo">
                <figcaption>#JavaScript</figcaption>
              </figure>
              <figure id="typescript">
                <img src="resources/images/typescript-logo.png" alt="futurist TypeScript logo">
                <figcaption>#TypeScript</figcaption>
              </figure>
              <figure id="sass">
                <img src="resources/images/sass-logo.png" alt="futurist Sass logo">
                <figcaption>#Sass</figcaption>
              </figure>
              <figure id="gpt">
                <img src="resources/images/gpt-logo.png" alt="futurist gpt logo">
                <figcaption>#GPT</figcaption>
              </figure>
              <figure id="github">
                <img src="resources/images/github-logo.png" alt="futurist Github logo">
                <figcaption>#Github</figcaption>
              </figure>
            </li>
          
            <li>
              <h4>o-Back-End & Data</h4>
              <p>With influences from my background in Economics and Logistics, I can build and connect the back-end seamlessly to the front-end for a smooth and effective process to produce data-driven features and experience. Additionally, I'm familiar with cloud technologies like Azure and AWS to leverage scalability.</p>
              <figure id="python">
                <img src="resources/images/python-logo.png" alt="futurist Python logo">
                <figcaption>#Python</figcaption>
              </figure>
              <figure id="mongodb">
                <img src="resources/images/mongo-logo.png" alt="futurist MongoDB logo">
                <figcaption>#MongoDB</figcaption>
              </figure>
              <figure id="postgresql">
                <img src="resources/images/postgre-logo.png" alt="futurist PostgreSQL logo">
                <figcaption>#PostgreSQL</figcaption>
              </figure>
              <figure id="azure">
                <img src="resources/images/azure-logo.png" alt="futurist MS Azure logo">
                <figcaption>#MS Azure</figcaption>
              </figure>
              <figure id="aws">
                <img src="resources/images/aws-logo.png" alt="futurist AWS logo">
                <figcaption>#AWS</figcaption>
              </figure>
              <figure>
                <img src="resources/images/node-logo.png" alt="futurist node logo">
                <figcaption>#Node.js</figcaption>
              </figure>
              <figure id="git">
                <img src="resources/images/git-logo.png" alt="futurist Git logo">
                <figcaption>#Git</figcaption>
              </figure>
              <figure>
                <img src="resources/images/express-logo.png" alt="futurist express logo">
                <figcaption>#Express,js</figcaption>
              </figure>
              
            
            </li>
          
            <li>
              <h4>o-Mobile/Cross-Platform</h4>
              <p>Since accessibility is a priority for myself and my clients, it's always been important to me that I acquired the skills to push any application on multiple platforms.</p>
              <figure id="react-native">
                <img src="resources/images/react-logo.png" alt="futurist React & R.Native logo">
                <figcaption>#React.Native</figcaption>
              </figure>
              <figure id="gpt">
                <img src="resources/images/gpt-logo.png" alt="futurist gpt logo">
                <figcaption>#GPT</figcaption>
              </figure>
              <figure id="azure">
                <img src="resources/images/azure-logo.png" alt="futurist MS Azure logo">
                <figcaption>#MS Azure</figcaption>
              </figure>
              <figure id="aws">
                <img src="resources/images/aws-logo.png" alt="futurist AWS logo">
                <figcaption>#AWS</figcaption>
            </li>
          </ul>
    
        </div>
      </section>

      <h2 id="experience-title">Work & Projects</h2>
      <section id="experience">
        
        <div id="netrica">
          <figure>
            <img src="resources/images/netrica.png" alt="netrica web home page">
            <figcaption>Netrica's prototype web app for business networking and services.</figcaption>
          </figure>
        </div>

        <div id="gundam">
          <figure>
            <img src="resources/images/gundam.png" alt="gundam builder home page">
            <figcaption>A web game where we can create custom gundams and mobile suit teams for battle.</figcaption>
          </figure>
          <p></p>
        </div>
      </section>
    </main>

    <footer>

      <div id="contacts">

        <form action="hub/formal.html" method="POST">
        <div id = "messaging" role="message box">
          <label for="message-me">Contacts:</label><br/>
          <textarea id="message-me" placeholder="Your message :)
          "></textarea>
        </div>
        </form>
        
        <ul>
          <li><a href="mailto:tantely.m.ra@gmail.com" role="e-mail address"><img src="resources/images/at-logo.png" alt="@-icon"></a></li>
          <li><a href="https://www.linkedin.com/in/tantely-matthieu/" role="linkedin contact"><img src="resources/images/linkedin-logo.png" alt="linkedin icon"></a></li>
          <li><a href="https://github.com/TantelyMR" role="github contact"><img src="resources/images/github-logo.png" alt="github-icon"></a></li>
        </ul>
        
      </div>
      <p id="last-message"><span>S</span><span>h</span><span>o</span><span>o</span><span>t</span><span> </span><span>m</span><span>e</span><span> </span><span>a</span><span> </span><span>m</span><span>e</span><span>s</span><span>s</span><span>a</span><span>g</span><span>e</span><span> </span><span>i</span><span>f</span><span> </span><span>y</span><span>o</span><span>u</span><span> </span><span>h</span><span>a</span><span>v</span><span>e</span><span> </span><span>s</span><span>o</span><span>m</span><span>e</span><span> </span><span>p</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span> </span><span>i</span><span>d</span><span>e</span><span>a</span><span>s</span><span>,</span><span> </span><span>w</span><span>a</span><span>n</span><span>t</span><span> </span><span>t</span><span>o</span><span> </span><span>c</span><span>o</span><span>l</span><span>l</span><span>a</span><span>b</span><span>,</span><span> </span><span>o</span><span>r</span><span> </span><span>j</span><span>u</span><span>s</span><span>t</span><span> </span><span>h</span><span>a</span><span>v</span><span>e</span><span> </span><span>a</span><span> </span><span>l</span><span>i</span><span>t</span><span>t</span><span>l</span><span>e</span><span> </span><span>c</span><span>h</span><span>a</span><span>t</span><span>!</span></p>

      <div id="show" aria-label="extra interactive show and animation">
      <!--<div id="dark"><div id="music-play" style="display: none;"></div></div>-->
      <img src="resources/images/mohammad-alizade-bg.webp" alt="something cool"></div>
    </footer>
    <p id="copyright"><span>&copy; Tantely Matthieu 2023</span></p>
  </body>
</html>
  `;
  // Update the document's content with the original English content
  document.documentElement.innerHTML = englishContent;
}

// Event listener for the "Language" button
document.getElementById('language').addEventListener('click', function() {
  // Check the current language and toggle
  if (document.documentElement.lang === 'en') {
    transformToFrench();
  } else if (document.documentElement.lang === 'fr') {
    transformToEnglish();
  }
});
