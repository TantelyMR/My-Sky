import { useRef, useEffect, useState } from "react";

import RebelleLogo from "../assets/images/rebelleS2.png";
import ChunsoftLogo from "../assets/images/chunsoft.png";
import CodecademyLogo from "../assets/images/codecademy.png";
import TreenodeLogo from "../assets/images/treenode.jpeg";
import LaunchSchool from "../assets/images/launchschool.png";
import WdLogo from "../assets/images/wd.png";
import Pouzet from "../assets/images/picture4.png";
import Yoko from "../assets/images/picture5.png";
import Paul from "../assets/images/picture6.png";

import LocationIcon from "../assets/icons/location-icon-4.svg?react";
import ListIcon from "../assets/icons/list-comic-icon.svg?react";

import "./Exp.css";

function CustomLeftScrollbar({ scrollTarget }) {
  const trackRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    const container = scrollTarget.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!container || !track || !thumb) return;

    function updateThumb() {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const ratio = clientHeight / scrollHeight;
      const thumbHeight = Math.max(clientHeight * ratio, 40);
      const maxThumbTop = clientHeight - thumbHeight;
      const top = (scrollTop / (scrollHeight - clientHeight)) * maxThumbTop || 0;
      thumb.style.height = `${thumbHeight}px`;
      thumb.style.transform = `translateY(${top}px)`;
    }

    function handleTrackClick(e) {
      const rect = track.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const percent = clickY / container.clientHeight;
      const targetScroll = percent * (container.scrollHeight - container.clientHeight);
      container.scrollTo({ top: targetScroll, behavior: "smooth" });
    }

    updateThumb();
    container.addEventListener("scroll", updateThumb);
    track.addEventListener("click", handleTrackClick);
    return () => {
      container.removeEventListener("scroll", updateThumb);
      track.removeEventListener("click", handleTrackClick);
    };
  }, [scrollTarget]);

  return (
    <div className="custom-scrollbar-track left-custom-scrollbar" ref={trackRef}>
      <div className="custom-scrollbar-thumb" ref={thumbRef}></div>
    </div>
  );
}

function Misc({ miscRef }) {
  const expRef = useRef();
  const refRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 630);
  const [swap, setSwap] = useState(false);

  const [showYokoJP, setShowYokoJP] = useState(false);
  const [showPouzetFR, setShowPouzetFR] = useState(false);
  const [showPaulFR, setShowPaulFR] = useState(false);
  const yokoPause = useRef(false);
  const pouzetPause = useRef(false);
  const paulPause = useRef(false);

  useEffect(() => {
    let yokoTimer, pouzetTimer, paulTimer;

    function runYoko() {
      if (!yokoPause.current) setShowYokoJP(s => !s);
      yokoTimer = setTimeout(runYoko, 5000);
    }
    function runPouzet() {
      if (!pouzetPause.current) setShowPouzetFR(s => !s);
      pouzetTimer = setTimeout(runPouzet, 5000);
    }
    function runPaul() {
      if (!paulPause.current) setShowPaulFR(s => !s);
      paulTimer = setTimeout(runPaul, 5000);
    }
    yokoTimer = setTimeout(runYoko, 5000);
    pouzetTimer = setTimeout(runPouzet, 5000);
    paulTimer = setTimeout(runPaul, 5000);

    return () => {
      clearTimeout(yokoTimer);
      clearTimeout(pouzetTimer);
      clearTimeout(paulTimer);
    };
  }, []);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 630);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <div id="misc" className="section" ref={miscRef}>
      <h2 className="software-title section-title">
        <strong>{`{`}</strong>
        <span>...</span>
        <span></span>
        <span>Exper</span>
        <span className="rainbow">i</span>
        <span className="rainbow">e</span>
        <span className="rainbow">n</span>
        <span className="rainbow">c</span>
        <span className="rainbow">e</span>
        <span>...</span>
        <strong>{`}`}</strong>
      </h2>

      <h3
        className={`history-toggle ${isMobile && !swap ? "toggled" : ""}`}
        onClick={() => isMobile && setSwap(false)}
      >
        [<span>...</span>History<span>...</span>]
      </h3>

      {(!isMobile || !swap) && (
        <div className={`exp-scroll-outer ${isMobile && swap ? "dimmed-section" : ""}`}>
          <CustomLeftScrollbar scrollTarget={expRef} />
          <div id="experiences" ref={expRef}>
            <div className="experience">
              <div className="place">
                <div className="place-logo-container">
                  <img src={RebelleLogo} alt="Rebelle Logo" onClick={() => { window.open("https://rebelle.app", "_blank", "noopener,noreferrer"); }} />
                </div>
                <a className="place-link" onClick={() => { window.open("https://rebelle.app", "_blank", "noopener,noreferrer"); }}>Rebelle Skies</a>
                <p className="place-location"><ListIcon />Full-time <br /><LocationIcon />Rockville, Maryland</p>
                <span className="place-date">Mar 2024 - Jul 2025</span>
              </div>
              <div className="role-container">
                <span className="role-name">Software Architect & Engineer</span>
                <p className="role-details">Architected & built this cross-platform social media app as a PWA on iOS, Android, and desktop. Led the development lifecycle—from infrastructure planning to interface design—optimizing for performance, modularity, & scalability.</p>
                <ul className="role-skills">
                  <li>NodeJS-ReactJS</li>
                  <li>Docker + Kubernetes</li>
                  <li>CLIP AI</li>
                  <li>ShieldGemma AI</li>
                  <li>Git + Github</li>
                  <li>Cloudflare CDN & Proxies</li>
                  <li>OVH Servers</li>
                </ul>
              </div>
            </div>
            <div className="experience">
              <div className="place">
                <div className="place-logo-container">
                  <img src={TreenodeLogo} alt="Treenode Logo" onClick={() => { window.open("https://www.treenode-studio.com/", "_blank", "noopener,noreferrer"); }} />
                </div>
                <a className="place-link" onClick={() => { window.open("https://www.treenode-studio.com/", "_blank", "noopener,noreferrer"); }}>TreeNode Studio</a>
                <p className="place-location"><ListIcon /> Contract - Remote<br /><LocationIcon /> Lyon, France</p>
                <span className="place-date">Aug 2023 - May 2024</span>
              </div>
              <div className="role-container">
                <span className="role-name">Software Migration Engineer</span>
                <p className="role-details">Worked with cross departmental teams to dissect, optimize, and re-implement core functions without disrupting critical legacy dependencies. Supported the migration of an enterprise system from a legacy monolith to a more modular/hybrid system. </p>
                <ul className="role-skills">
                  <li>Docker</li>
                  <li>Redis</li>
                  <li>Git</li>
                  <li>FastAPI</li>
                  <li>AWS SDKs</li>
                  <li>Linux Ubuntu</li>
                </ul>
              </div>
            </div>
            <div className="experience">
              <div className="place">
                <div className="place-logo-container">
                  <img src={CodecademyLogo} alt="Codecademy Logo" onClick={() => { window.open("https://www.codecademy.com/profiles/TantelyMR/certificates/ffd0f42cce1a44e9a0108b365047a0a6", "_blank", "noopener,noreferrer"); }} />
                </div>
                <a className="place-link" onClick={() => { window.open("https://www.codecademy.com/profiles/TantelyMR/certificates/ffd0f42cce1a44e9a0108b365047a0a6", "_blank", "noopener,noreferrer"); }}>Codecademy</a>
                <p className="place-location"><LocationIcon />Remote</p>
                <span className="place-date">Aug 2022 - Nov 2023</span>
              </div>
              <div className="role-container">
                <span className="role-name">Full-Stack Engineer - Student</span>
                <p className="role-details">After LaunchSchool and my web developeing for a while, I set out to deepen my understanding across both front & back-endtechnologies. My goal was to master the full software development process so I could contribute more meaningfully to future teams & projects.</p>
                <ul className="role-skills">
                  <li>API Development & Orchestration</li>
                  <li>NodeJS-ReactJS</li>
                  <li>SQL PostGre & NoSQL MongoDB</li>
                  <li>Encryption & Web Security</li>
                </ul>
              </div>
            </div>
            <div className="experience">
              <div className="place">
                <div className="place-logo-container">
                  <img src={ChunsoftLogo} alt="Chunsoft Logo" onClick={() => { window.open("https://www.spike-chunsoft.com/", "_blank", "noopener,noreferrer"); }} />
                </div>
                <a className="place-link" onClick={() => { window.open("https://www.spike-chunsoft.com/", "_blank", "noopener,noreferrer"); }}>ChunSoft</a>
                <p className="place-location"><ListIcon />Contract-Remote<br /><LocationIcon />Nagano, Japan</p>
                <span className="place-date">Jun 2021 - Jul 2022</span>
              </div>
              <div className="role-container">
                <span className="role-name">Web Developer</span>
                <p className="role-details">Worked on several client-facing properties, maintaining and enhancing marketing pages built with React, HTML/CSS, and JavaScript. </p>
                <ul className="role-skills">
                  <li>HTML5</li>
                  <li>CSS-SCSS</li>
                  <li>ReactJS</li>
                  <li>JavaScript</li>
                  <li>Mocha Test</li>
                </ul>
              </div>
            </div>
            <div className="experience">
              <div className="place">
                <div className="place-logo-container">
                  <img src={LaunchSchool} alt="LaunchSchool Logo" onClick={() => { window.open("https://launchschool.com/", "_blank", "noopener,noreferrer"); }} />
                </div>
                <a className="place-link" onClick={() => { window.open("https://launchschool.com/", "_blank", "noopener,noreferrer"); }}>LaunchSchool</a>
                <p className="place-location"><LocationIcon />Remote</p>
                <span className="place-date">Aug 2020 - Jan 2021</span>
              </div>
              <div className="role-container">
                <span className="role-name">Software Developer Apprentice</span>
                <p className="role-details">Programming & software development fundamentals.</p>
                <ul className="role-skills">
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SQL</li>
                </ul>
              </div>
            </div>
            <div className="experience">
              <div className="place">
                <div className="place-logo-container">
                  <img src={WdLogo} alt="WD Logo" onClick={() => { window.open("https://launchschool.com/", "_blank", "noopener,noreferrer"); }} />
                </div>
                <a className="place-link" onClick={() => { window.open("https://launchschool.com/", "_blank", "noopener,noreferrer"); }}>WD Advanced Materials</a>
                <p className="place-location"><ListIcon />Full-time <br /><LocationIcon />Beltsville, Maryland</p>
                <span className="place-date">Nov 2017 - Jul 2020</span>
              </div>
              <div className="role-container">
                <span className="role-name">Procurement Manager & Logistics Analyst</span>
                <p className="role-details">Recognized for coordinating inter-departmental operations and executing continuous process enhancement procedures, establishing better measurements to evaluate KPIs, as well as identifying/resolving critical problems through data analysis and process evaluation. Instrumental in streamlining supply chain processes, developing/implementing sourcing strategies.</p>
              </div>
              <ul className="role-skills">
                <li>Resource Planning</li>
                <li>Project Management</li>
                <li>Team Management</li>
                <li>Database Management</li>
                <li>Statistics</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <h3
        className={`testimonials-toggle ${isMobile && swap ? "toggled" : ""}`}
        onClick={() => isMobile && setSwap(true)}
      >
        [<span>...</span>Testimonials<span>...</span>]
      </h3>
      {(!isMobile || swap) && (

        <div className={`ref-scroll-outer ${isMobile && !swap ? "dimmed-section" : ""}`}>
          <CustomLeftScrollbar scrollTarget={refRef} />
          <div id="references" ref={refRef}>
            <div className="reference">
              <div className="ref-avatar-container">
                <img src={Paul} alt="Paul's avatar picture" onClick={() => { window.open("https://www.linkedin.com/in/paul-duvallet-624822378/", "_blank", "noopener,noreferrer"); }} />
                <span onClick={() => { window.open("https://www.linkedin.com/in/paul-duvallet-624822378/", "_blank", "noopener,noreferrer"); }}>Paul Duvallet</span>
                <span>Software Architect at TreeNode</span>
                <p
                  key={showPaulFR ? "fr" : "en"}
                  className="reference-details"
                  onMouseEnter={() => (paulPause.current = true)}
                  onMouseLeave={() => (paulPause.current = false)}
                  onTouchStart={() => (paulPause.current = true)}
                  onTouchEnd={() => (paulPause.current = false)}
                >
                  {showPaulFR ? (
                    <>
                      <span>«</span>Matthieu n’est pas seulement un ingénieur — avant tout, c’est un partenaire qui apporte une attention et un soin exceptionnels tant à son propre travail qu’à la vision d’ensemble, ce qui a rendu notre collaboration des plus fluides. Il a également un véritable talent pour comprendre le potentiel des outils que nous avons mis à sa disposition, et pour les utiliser, les améliorer et ainsi faire avancer nos objectifs bien au-delà de ce que nous avions imaginé. Mais par-dessus tout, j’ai trouvé sa créativité remarquable — que ce soit dans sa manière d’aborder les problèmes différemment ou simplement de proposer des idées de fonctionnalités originales. J’ai hâte de voir où cette créativité et ce souci du détail le mèneront.<span>»</span>
                    </>
                  ) : (
                    <>
                      <span>"</span>Matthieu is not just an engineer, before that he is a partner that brings exceptional care and attention to both his own work and the big picture, and that made for the smoothest collaboration. He also has a knack for understanding the power of the tools we made available to him and how to use and improve upon them to push our goals and much farther. And most of all, I found his creativity quite remarkable whether he used it to approach a problem differently or simply to brainstorm some cool features. I can't wait to see where he takes such creativity and care.<span>"</span>
                    </>
                  )}
                </p>

              </div>
            </div>

            <div className="reference">
              <div className="ref-avatar-container">
                <img src={Yoko} alt="Yoko's avatar picture" onClick={() => { window.open("https://www.linkedin.com/in/yoko-m-2805b857/", "_blank", "noopener,noreferrer"); }} />
                <span onClick={() => { window.open("https://www.linkedin.com/in/yoko-m-2805b857/", "_blank", "noopener,noreferrer"); }}>Yoko Nishikawa</span>
                <span>Director of Product & Sales at Chunsoft</span>
              </div>
              <p
                key={showYokoJP ? "jp" : "en"}
                className="reference-details"
                onMouseEnter={() => (yokoPause.current = true)}
                onMouseLeave={() => (yokoPause.current = false)}
                onTouchStart={() => (yokoPause.current = true)}
                onTouchEnd={() => (yokoPause.current = false)}
              >
                {showYokoJP ? (
                  <>
                    <span>「</span>課題が単純なものでも複雑なものでも、タンテリーは常に協力的で発想力豊かでした。細部への細やかな注意と、フィードバックを素直に受け入れて素早く学ぶ姿勢が、私たちのプロジェクトを円滑かつ迅速に進めることを可能にしてくれました。彼がドラフトや指示書から実際に動くプロトタイプまで仕上げる能力は、私たちにとって非常に大きな財産でした。<span>」</span>
                  </>
                ) : (
                  <>
                    <span>"</span>Whether the task at hand was simple or complex, Tantely was always very collaborative & resourceful. And his meticulous attention to details & keen attitude to receive feedback and learn fast often allowed our projects to move smoothly & quickly. His ability to take a subject from a set of drafts and directions to a working prototype has been an incredible asset for us.<span>"</span>
                  </>
                )}
              </p>

            </div>

            <div className="reference">
              <div className="ref-avatar-container">
                <img src={Pouzet} alt="Pouzet's avatar picture" onClick={() => { window.open("https://www.linkedin.com/in/hardouin-pouzet-b900504a/", "_blank", "noopener,noreferrer"); }} />
                <span onClick={() => { window.open("https://www.linkedin.com/in/hardouin-pouzet-b900504a/", "_blank", "noopener,noreferrer"); }}>Hardouin Pouzet</span>
                <span>President & Founder at TreeNode</span>
                <p
                  key={showPouzetFR ? "fr" : "en"}
                  className="reference-details"
                  onMouseEnter={() => (pouzetPause.current = true)}
                  onMouseLeave={() => (pouzetPause.current = false)}
                  onTouchStart={() => (pouzetPause.current = true)}
                  onTouchEnd={() => (pouzetPause.current = false)}
                >
                  {showPouzetFR ? (
                    <>
                      <span>«</span>Travailler avec Matthieu pendant notre phase de transition a été un réel plaisir. Nous étions une petite équipe où la polyvalence et l’autonomie étaient essentielles. Sa soif d’apprendre et de comprendre de nouvelles technologies, ainsi que sa persévérance, ont largement dépassé le cadre de son poste et ont eu un impact très positif sur notre projet.<span>»</span>
                    </>
                  ) : (
                    <>
                      <span>"</span>Matthieu was a pleasure to work with during our transition, we were a small team & the need for versatility and independence was crucial. His thirst to learn and understand new technologies & his perseverance has done wonders beyond the scope of his role.<span>"</span>
                    </>
                  )}
                </p>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Misc;
