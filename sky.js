/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

const topNav = document.querySelector('#top-nav');
const skillTechNav = document.querySelector('#skill-nav');
const projectsNav = document.querySelector('#exp-nav');
const sideBar = document.querySelector('#side-bar');
const header = document.querySelector('header');
const technology = document.querySelector('#technology');
const experience = document.querySelector('#experience');
const subSection = document.querySelectorAll('main div');
const skillAndTech = document.querySelectorAll('h2');
const headerWelcome = document.querySelector('header h1');

const skillTitle = document.getElementById('skill-tech-title');

function navBackgroundColor() {
  topNav.classList.toggle('bordered', window.scrollY > header.offsetHeight);
}

window.addEventListener('scroll', navBackgroundColor);

function sideBarReveal() {
  sideBar.classList.toggle('top', (window.scrollY < header.offsetHeight / 1.5) && (window.innerWidth > 680));
}

window.addEventListener('scroll', sideBarReveal);

function sectionToggle() {
  for (let div of subSection) {
    div.classList.toggle('sub-section');
  }
}

function sectionScrollToggle() {
  // eslint-disable-next-line max-len
  if (window.scrollY < skillTitle.offsetHeight / 2) for (let div of subSection) {
    div.classList.toggle('sub-section');
  }
}

window.addEventListener('scroll',sectionScrollToggle);

skillTechNav.addEventListener('click',sectionToggle);
projectsNav.addEventListener('click',sectionToggle);
technology.addEventListener('click',sectionToggle);
experience.addEventListener('click',sectionToggle);

for (let h2 of skillAndTech) {
  h2.addEventListener('click', sectionToggle);
}

function showFigcaption(event) {
  const figcaption = event.currentTarget.querySelector('figcaption');
  if (figcaption) {
    figcaption.style.opacity = '1';
    figcaption.style.transition = '2s ease';
  }
}

function hideFigcaption(event) {
  const figcaption = event.currentTarget.querySelector('figcaption');
  if (figcaption) {
    figcaption.style.opacity = '0%';
  }
}

function changeWelcome() {
  this.innerHTML = (this.innerHTML === 'Welcome!') ? 'Bienvenue!' : 'Welcome!';
  this.style.animation = "navigation-transit 2s";
  this.style.transition = "4s ease";
}

headerWelcome.addEventListener('mouseover', changeWelcome);
headerWelcome.addEventListener('click', changeWelcome);


// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
  const skillSection = document.getElementById('skill');

  if (!skillSection) {
    console.error('Skill section not found!');
    return;
  }
  const skillFigures = skillSection.querySelectorAll('figure');

  skillFigures.forEach((figure) => {
    figure.addEventListener('mouseover', showFigcaption);
    figure.addEventListener('focus', showFigcaption);
    figure.addEventListener('mouseout', hideFigcaption);
    figure.addEventListener('blur', hideFigcaption);
  });
}
);

const spanLetters = document.querySelectorAll('p span');
const fonts = [
  'Josefin Slab',
  'League Script',
  'Poiret One',
  'Raleway',
  'Raleway Dots',
  'Rouge Script',
  'Rubik Moonrocks',
  'Sacramento',
  'Tourney',
];

function changeLetterFont(event) {
  const getRandomFontIndex = () => Math.floor(Math.random() * 9);
  const randomFont = fonts[getRandomFontIndex()];
  event.currentTarget.style.fontFamily = randomFont;
}

for (let letter of spanLetters) {
  letter.addEventListener('mouseover', changeLetterFont);
  letter.addEventListener('touchmove', changeLetterFont);
}

const message = document.querySelectorAll('p');

message.forEach((paragraph) => {
  paragraph.addEventListener('click', () => {
    for (let letter of spanLetters) {
      letter.style.fontFamily = 'Raleway';
    }
  });
});

const lastMessage = document.querySelector('#last-message');

function revealElement(event) {
  event.currentTarget.style.opacity = "100%";
}

lastMessage.onmouseover = revealElement;
lastMessage.ontouchstart = revealElement;

const sideTitles = document.querySelectorAll('#side-bar h4');

function hideDetails(details) {
  details.style.display = "none";
}

function displayElement() {
  let details = this.nextElementSibling;
  if (details.style.display !== "flex") {
    details.style.display = "flex";

    if (window.innerWidth > 681) {
      details.style.animation = "navigation-transit 2s";
    }
  } else {
    details.style.display = "none";
  }
  setTimeout(hideDetails, 20000, details);
}
sideTitles.forEach((title) => {
  title.addEventListener('click', displayElement);
});

const music = document.querySelector("#music");
const audioPlayer = document.querySelector("#audioPlayer");

function playAudio() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

music.addEventListener('click', playAudio);
music.addEventListener('click', displayElement);
