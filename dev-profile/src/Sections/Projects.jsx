import { useState } from "react";
import "./Projects.css";

function Projects({ projectsRef }) {
  const [showPreview, setShowPreview] = useState(false);
  const [activeProject, setActiveProject] = useState("rebelle");

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
        <li
          className={activeProject === "rebelle" ? "active" : ""}
          onClick={() => {
            setActiveProject("rebelle");
            setShowPreview(false);
          }}
        >
          Rebelle
        </li>
        <li
          className={activeProject === "media" ? "active" : ""}
          onClick={() => {
            setActiveProject("media");
            setShowPreview(false);
          }}
        >
          Media Qualifier API
        </li>
        <li
          className={activeProject === "chat" ? "active" : ""}
          onClick={() => {
            setActiveProject("chat");
            setShowPreview(false);
          }}
        >
          Chat API
        </li>
      </ul>

      <div className="project-container">
        {activeProject === "rebelle" && (
          <div className="project">
            <h3>
              Rebelle Skies <a href="https://rebelle.app">[https://rebelle.app]</a>
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

            {!showPreview && <><p>
              As software architect, I selected Rebelle Skies's entire tech stack, programmed
              its back-end and designed the front-end. It is available on all major platforms as it can
              be installed as a progressive app on iOS, Android and any desktop browser.
            </p><h4>Core Stack: MERN</h4></>}
            {showPreview ? (
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
            ) : (
              <div className="tech-stack">
                <ul>
                  <h4>Back:</h4>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                  <li>Typesense</li>
                  <li>Milvus</li>
                  <li>CLIP (OpenAI)</li>
                  <li>ShieldGemma (GoogleAI)</li>
                </ul>
                <ul>
                  <h4>Deployment:</h4>
                  <li>Github</li>
                  <li>Appflow</li>
                  <li>Netlify</li>
                  <li>Cloudfare</li>
                  <li>Digital Ocean</li>
                  <li>Docker + Kubernetes</li>
                  <li>Linux</li>
                </ul>
                <ul>
                  <h4>Front:</h4>
                  <li>Capacitor</li>
                  <li>Cloudflare</li>
                  <li>Captcha</li>
                  <li>React</li>
                  <li>Konva</li>
                  <li>Leaflet</li>
                  <li>Pangea</li>
                </ul>
              </div>
            )}
          </div>
        )}

        {activeProject === "media" && (
          <div className="project">
            <h3>Media Qualifier API</h3>
            <p>High-performance API that detects NSFW and inappropriate media using multi-layered classifiers (NSFW.js, CLIP, Danbooru, NudeNet, ShieldGemma2). Optimized for async file processing and CDN workflows.</p>
            <div className="tech-stack">
              <ul>
                <h4>Back:</h4>
                <li>Node.js</li>
                <li>Python</li>
                <li>NSFW.js</li>
                <li>CLIP</li>
                <li>NudeNet</li>
                <li>ShieldGemma2</li>
              </ul>
              <ul>
                <h4>Infra:</h4>
                <li>Redis</li>
                <li>Cloudflare R2</li>
                <li>BullMQ</li>
              </ul>
            </div>
          </div>
        )}

        {activeProject === "chat" && (
          <div className="project">
            <h3>Chat API</h3>
            <p>Fully featured chat engine including messaging, read receipts, reactions, media attachments, typing indicators, and WebSocket integration. Supports 1-to-1 and group conversations with secure storage.</p>
            <div className="tech-stack">
              <ul>
                <h4>Back:</h4>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>Socket.IO</li>
              </ul>
              <ul>
                <h4>Front:</h4>
                <li>React</li>
                <li>Capacitor</li>
                <li>Konva</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
