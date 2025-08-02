import { useState, useRef, useEffect } from "react";

import "./Projects.css";

import ProjectPrev1 from "../assets/images/screenshot1.png";
import ProjectPrev2 from "../assets/images/screenshot2.png";

function Projects({ projectsRef }) {
  const [showPreview, setShowPreview] = useState(false);
  const [activeProject, setActiveProject] = useState("rebelle");

  const mediaRef1 = useRef();
  const mediaRef2 = useRef();

  useEffect(() => {
    let pos1 = 0, dir1 = 1;
    let pos2 = 0, dir2 = 1;

    const interval = setInterval(() => {
      // Media Preview
      if (activeProject === "media" && mediaRef1.current) {
        const el = mediaRef1.current;
        const max1 = el.scrollHeight - el.clientHeight;
        // Even if max1 is small, we still move between 0 and max1
        if (pos1 >= max1) dir1 = -1;
        else if (pos1 <= 0) dir1 = 1;
        pos1 = Math.min(Math.max(pos1 + dir1, 0), max1);
        el.scrollTop = pos1;
      }

      // Chat Preview
      if (activeProject === "chat" && mediaRef2.current) {
        const el = mediaRef2.current;
        const max2 = el.scrollHeight - el.clientHeight;
        if (pos2 >= max2) dir2 = -1;
        else if (pos2 <= 0) dir2 = 1;
        pos2 = Math.min(Math.max(pos2 + dir2, 0), max2);
        el.scrollTop = pos2;
      }
    }, 30); // run ~33×/sec

    return () => clearInterval(interval);
  }, [activeProject]);


  return (
    <div id="projects" className="section" ref={projectsRef}>
      <h2 className="software-title">
        <strong>[ </strong>
        <span className="rainbow">-</span>
        <span className="rainbow">P</span>
        <span className="rainbow">r</span>
        <span className="rainbow">o</span>
        <span className="rainbow">j</span>
        <span className="rainbow">e</span>
        <span className="rainbow">c</span>
        <span className="rainbow">t</span>
        <span className="rainbow">s</span>
        <span className="rainbow">-</span>
        <strong> ]</strong>
      </h2>

      <ul className="project-list">
        {["rebelle", "media", "chat"].map(proj => (
          <li
            key={proj}
            className={activeProject === proj ? "active" : ""}
            onClick={() => {
              setActiveProject(proj);
              setShowPreview(false);
            }}
          >
            {proj === "rebelle" && "Rebelle"}
            {proj === "media" && "Media Qualifier API"}
            {proj === "chat" && "Chat API"}
          </li>
        ))}
      </ul>

      <div className="project-container">
        {activeProject === "rebelle" && (
          <div className="project">
            <h3>
              Rebelle <a href="https://rebelle.app">[https://rebelle.app]</a>
            </h3>

            <div className="project-buttons">
              <button
                className={!showPreview ? "active" : ""}
                onClick={() => setShowPreview(false)}
              >
                Tech
              </button>
              <button
                className={showPreview ? "active" : ""}
                onClick={() => setShowPreview(true)}
              >
                Preview
              </button>
            </div>

            {!showPreview ? (
              <>
                <p>
                  I selected Rebelle Skies's entire tech stack, programmed its
                  back-end and designed the front-end. It is available on all
                  major platforms as it can be installed as a progressive app
                  on iOS, Android and any desktop browser. Analytics through
                  Python pipelines and data is encrypted in transition & at
                  rest.
                </p>
                <h4>Core Stack: MERN</h4>
                <div className="tech-stack">
                  <ul>
                    <h4>Back-End:</h4>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Redis</li>
                    <li>Nginx</li>
                    <li>Typesense</li>
                    <li>Milvus</li>
                    <li>CLIP (OpenAI)</li>
                    <li>ShieldGemma (GoogleAI)</li>
                  </ul>
                  <ul>
                    <h4>Infrastructure:</h4>
                    <li>Github</li>
                    <li>Appflow</li>
                    <li>Netlify</li>
                    <li>Cloudfare</li>
                    <li>Digital Ocean</li>
                    <li>Docker + Kubernetes</li>
                    <li>Linux</li>
                  </ul>
                  <ul>
                    <h4>Front-End:</h4>
                    <li>Capacitor</li>
                    <li>Cloudflare</li>
                    <li>React</li>
                    <li>Konva</li>
                    <li>Leaflet</li>
                    <li>Pangea</li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="project-preview">
                <video
                  playsInline
                  muted
                  loop
                  autoPlay
                  preload="auto"
                  style={{ maxWidth: "100%", height: "auto" }}
                >
                  <source
                    src="https://cdn.rebelle.app/lapinou_1754111268307/media_0/e9MBT9JbAf1_720p.webm"
                    type="video/webm"
                  />
                </video>
              </div>
            )}
          </div>
        )}

        {activeProject === "media" && (
          <div className="project">
            <h3>Media Qualifier API</h3>
            <p>
              High-performance API that detects NSFW and inappropriate media
              using multi-layered classifiers. This API was developed as an
              alternative to services like AWS Rekognition or Azure AI Vision,
              and can also be used for smart media categorisation.
            </p>
            <div className="tech-stack">
              <ul>
                <h4>Back-End:</h4>
                <li>Node.js</li>
                <li>Python</li>
                <li>Docker</li>
                <li>FastAPI</li>
                <li>NSFWjs</li>
                <li>CLIP</li>
                <li>NudeNet</li>
                <li>ShieldGemma2</li>
              </ul>
              <ul>
                <h4>Infrastructure:</h4>
                <li>Redis</li>
                <li>Nginx</li>
                <li>Cloudflare R2</li>
                <li>BullMQ</li>
                <li>OVH Cloud</li>
              </ul>
            </div>
            <span>
              Repo: <a href="https://github.com/TantelyMR/">[Github]</a>
            </span>
            <div className="media-preview" ref={mediaRef1}>
              <img src={ProjectPrev1} alt="Media Qualifier API Preview" />
            </div>
          </div>
        )}

        {activeProject === "chat" && (
          <div className="project">
            <h3>Chat API</h3>
            <p>
              Minimalist but fully featured chat engine including messaging,
              reactions, media attachments, typing indicators, and WebSocket
              integration. Supports 1-to-1 and group conversations with secure
              storage.
            </p>
            <div className="tech-stack">
              <ul>
                <h4>Back-End:</h4>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>Socket.IO</li>
                <li>OVH Ecoservers</li>
              </ul>
              <ul>
                <h4>Front-End:</h4>
                <li>React Native</li>
                <li>Cloudflare</li>
              </ul>
            </div>
            <span>
              Repo: <a href="https://github.com/TantelyMR/">[Github]</a>
            </span>
            <div className="media-preview" ref={mediaRef2}>
              <img src={ProjectPrev2} alt="Chat API Preview" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
