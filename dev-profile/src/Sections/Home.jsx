import { useEffect, useState, useRef } from "react";
import { useSky } from "../SkyContext";

import EmailButton from "../assets/icons/email-icon.svg?react";
import LinkedInButton from "../assets/icons/linkedin-icon.svg?react";
import GithubButton from "../assets/icons/github-icon.svg?react";
import HomeButton from "../assets/icons/home-icon-4.svg?react";
import SkillsButton from "../assets/icons/ai-icon-2.svg?react";
import ProjectsButton from "../assets/icons/light-cool-icon.svg?react";
import BackgroundButton from "../assets/icons/full-screen-icon.svg?react";

import "./Home.css";
import Welcome from "./Welcome";
import Skills from "./Skills";
import Projects from "./Projects";
import Misc from "./Misc";

function Home() {
  const { setMediaMessage, setServerMessage } = useSky();
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [activeSection, setActiveSection] = useState("welcome");
  const email = "tantely.matthieu@gmail.com";

  const contactRef = useRef(null);
  const emailOptionsRef = useRef(null);

  const sectionRefs = {
    welcome: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    misc: useRef(null),
  };

  const scrollToSection = (id) => {
    const el = sectionRefs[id]?.current;
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/tantely-matthieu/", "_blank", "noopener,noreferrer");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/TantelyMR/", "_blank", "noopener,noreferrer");
  };

  const handleEmailClick = () => {
    setShowEmailOptions((prev) => !prev);
  };

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(email)
      ? setMediaMessage("Email copied to clipboard!")
      : setServerMessage("Clipboard API not available.");
    setShowEmailOptions(false);
  };

  const handleMailTo = () => {
    window.location.href = `mailto:${email}`;
    setShowEmailOptions(false);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        emailOptionsRef.current &&
        !emailOptionsRef.current.contains(e.target) &&
        contactRef.current &&
        !contactRef.current.contains(e.target)
      ) {
        setShowEmailOptions(false);
      }
    }

    if (showEmailOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showEmailOptions]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "0px 0px -50% 0px", // ensure section top is well into view
        threshold: [0.3, 0.5, 0.75, 1],
      }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const homeEl = document.getElementById("home");
    const scrollbar = document.getElementById("custom-scrollbar");
    const thumb = document.getElementById("custom-thumb");

    let isDragging = false;
    let startY = 0;
    let startScroll = 0;

    const updateThumb = () => {
      const scrollTop = homeEl.scrollTop;
      const scrollHeight = homeEl.scrollHeight - homeEl.clientHeight;
      const thumbHeight = Math.max(40, (homeEl.clientHeight / homeEl.scrollHeight) * homeEl.clientHeight);
      const top = (scrollTop / scrollHeight) * (homeEl.clientHeight - thumbHeight);

      thumb.style.height = `${thumbHeight}px`;
      thumb.style.transform = `translateY(${top}px)`;
    };

    const handleTrackClick = (e) => {
      const rect = scrollbar.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const percent = clickY / homeEl.clientHeight;
      const targetScroll = percent * (homeEl.scrollHeight - homeEl.clientHeight);
      homeEl.scrollTo({ top: targetScroll, behavior: "smooth" });
    };

    const handleThumbMouseDown = (e) => {
      isDragging = true;
      startY = e.clientY;
      startScroll = homeEl.scrollTop;
      e.preventDefault();
      document.body.style.userSelect = "none";
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const deltaY = e.clientY - startY;
      const scrollableHeight = homeEl.scrollHeight - homeEl.clientHeight;
      const thumbHeight = thumb.offsetHeight;
      const maxThumbTop = homeEl.clientHeight - thumbHeight;
      const scrollDelta = (deltaY / maxThumbTop) * scrollableHeight;

      homeEl.scrollTop = startScroll + scrollDelta;
    };

    const handleMouseUp = () => {
      isDragging = false;
      document.body.style.userSelect = "";
    };

    if (homeEl) {
      homeEl.addEventListener("scroll", updateThumb);
      scrollbar.addEventListener("click", handleTrackClick);
      thumb.addEventListener("mousedown", handleThumbMouseDown);
      thumb.addEventListener("click", e => e.stopPropagation());
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      updateThumb();
    }

    return () => {
      if (homeEl) homeEl.removeEventListener("scroll", updateThumb);
      scrollbar.removeEventListener("click", handleTrackClick);
      thumb.removeEventListener("mousedown", handleThumbMouseDown);
      thumb.removeEventListener("click", e => e.stopPropagation());
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div id="home">
      <Welcome welcomeRef={sectionRefs.welcome} scrollToSection={scrollToSection} />
      <Skills skillsRef={sectionRefs.skills} />
      <Projects projectsRef={sectionRefs.projects} />
      <Misc miscRef={sectionRefs.misc} />
      <ul id="contact" ref={contactRef} onClick={(e) => e.stopPropagation()}>
        {!showEmailOptions && (
          <li>
            <span onClick={handleLinkedInClick} style={{ cursor: "pointer" }}>
              <LinkedInButton />
            </span>
          </li>
        )}

        {showEmailOptions && (
          <div
            ref={emailOptionsRef}
            className="email-options"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={handleCopyEmail}>Copy Email</button>
            <button onClick={handleMailTo}>Open in Mail</button>
          </div>
        )}
        {!showEmailOptions && (
          <li style={{ position: "relative" }}>
            <span onClick={handleEmailClick} style={{ cursor: "pointer" }}>
              <EmailButton />
            </span>
          </li>
        )}

        {!showEmailOptions && (
          <li>
            <span onClick={handleGithubClick} style={{ cursor: "pointer" }}>
              <GithubButton />
            </span>
          </li>
        )}
      </ul>

      <ul id="navigator">
        <li
          className={activeSection === "welcome" ? "active" : ""}
          onClick={() => scrollToSection("welcome")}
        >
          <HomeButton /> Home
        </li>
        <li
          className={activeSection === "skills" ? "active" : ""}
          onClick={() => scrollToSection("skills")}
        >
          <SkillsButton /> Skills
        </li>
        <li
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => scrollToSection("projects")}
        >
          <ProjectsButton /> Projects
        </li>
        <li
          className={activeSection === "misc" ? "active" : ""}
          onClick={() => scrollToSection("misc")}
        >
          <BackgroundButton /> Misc
        </li>
      </ul>
      <div id="custom-scrollbar">
        <div id="custom-thumb" />
      </div>

    </div>
  );
}

export default Home;
