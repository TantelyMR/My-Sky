/* eslint-disable max-lines-per-function */
const topNav = document.querySelector('#top-nav');
const sideBar = document.querySelector('#side-bar');
const header = document.querySelector('header');
//const technology = document.querySelector('#technology');

function navBackgroundColor() {
  topNav.classList.toggle('bordered', window.scrollY > header.offsetHeight);
}

function sideColorChange() {
  sideBar.style.color = (window.scrollY < header.offsetHeight / 2) && (window.innerWidth > 680) ? 'black' : 'white';
}

function showFigcaption(event) {
  const figcaption = event.currentTarget.querySelector('figcaption');
  if (figcaption) {
    figcaption.style.opacity = '100%';
  }
}

function hideFigcaption(event) {
  const figcaption = event.currentTarget.querySelector('figcaption');
  if (figcaption) {
    figcaption.style.opacity = '0%';
  }
}

window.addEventListener('scroll', sideColorChange);
window.addEventListener('scroll', navBackgroundColor);

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

const headerWelcome = document.querySelector('header h1');

function changeWelcome() {
  this.innerHTML = (this.innerHTML === 'Welcome!') ? 'Bienvenue!' : 'Welcome!';
}

headerWelcome.addEventListener('mouseover', changeWelcome);