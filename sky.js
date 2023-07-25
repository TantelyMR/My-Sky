/* eslint-disable max-lines-per-function */
const topNav = document.querySelector('#top-nav');
const sideBar = document.querySelector('#side-bar');
const header = document.querySelector('header');
const technology = document.querySelector('#technology');

function navBackgroundColor () {
  if (window.scrollY > header.offsetHeight) {
    topNav.classList.add("bordered");
  } else {
    topNav.classList.remove("bordered");
  }
}

/*
function horizontalWheelScroll(event) {

  if (window.getComputedStyle(this).overflow === 'auto') {
    event.preventDefault();
    this.scrollLeft += event.deltaY;
  }
}

technology.addEventListener('wheel', horizontalWheelScroll);

*/

window.addEventListener('scroll', navBackgroundColor);

// Wait for the DOM content to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Get the skill section
  const skillSection = document.getElementById("skill");

  if (!skillSection) {
    console.error("Skill section not found!");
    return;
  }
  const skillFigures = skillSection.querySelectorAll("figure");

  skillFigures.forEach((figure) => {
    figure.addEventListener("mouseover", showFigcaption);
    figure.addEventListener("focus", showFigcaption);
    figure.addEventListener("mouseout", hideFigcaption);
    figure.addEventListener("blur", hideFigcaption);
  });

  function showFigcaption(event) {
    const figcaption = event.currentTarget.querySelector("figcaption");
    if (figcaption) {
      figcaption.style.opacity = "100%";
    }
  }

  function hideFigcaption(event) {
    const figcaption = event.currentTarget.querySelector("figcaption");
    if (figcaption) {
      figcaption.style.opacity = "0%";
    }
  }
});
