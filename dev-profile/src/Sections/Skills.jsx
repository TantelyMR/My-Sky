import { useState, useEffect, useRef } from "react";
import './Skills.css';

function Skills({ skillsRef }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const containerRef = useRef(null);
  const cycleIndex = useRef(0);
  const intervalRef = useRef(null);

  const nodeRefs = {
    frontend: useRef(),
    backend: useRef(),
    cloud: useRef(),
    center: useRef(),
  };
  const [lines, setLines] = useState([]);

  const CATEGORIES = ["frontend", "backend", "cloud"];

  useEffect(() => {
    const updateLines = () => {
      const container = containerRef.current?.getBoundingClientRect();
      if (!container) return;

      const centerBox = nodeRefs.center.current?.getBoundingClientRect();
      if (!centerBox) return;

      const center = {
        x: centerBox.left - container.left + centerBox.width / 2,
        y: centerBox.top - container.top + centerBox.height / 2
      };

      const newLines = Object.entries(nodeRefs).flatMap(([key, ref]) => {
        if (key === 'center') return [];
        const targetBox = ref.current?.getBoundingClientRect();
        if (!targetBox) return [];

        const target = {
          x: targetBox.left - container.left + targetBox.width / 3,
          y: targetBox.top - container.top + targetBox.height / 3
        };

        return [{ x1: center.x, y1: center.y, x2: target.x, y2: target.y }];
      });

      setLines(newLines);
    };

    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  // Auto-cycle logic
  useEffect(() => {
    if (hasUserInteracted) return; // stop auto-cycle once user clicks

    intervalRef.current = setInterval(() => {
      setActiveCategory(CATEGORIES[cycleIndex.current % CATEGORIES.length]);
      cycleIndex.current += 1;
    }, 3900);

    return () => clearInterval(intervalRef.current);
  }, [hasUserInteracted]);

  const toggleCategory = (category) => {
    if (!hasUserInteracted) {
      setHasUserInteracted(true);
      clearInterval(intervalRef.current);
    }
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div id="skills" className="section" ref={skillsRef}>
      <h2 className="section-title"><strong>[ </strong><span>Full</span>-<span>Stack</span> Development<strong> ]</strong></h2>

      <div className="skills-graph" ref={containerRef}>
        <svg className="connector-lines">
          {lines.map((line, idx) => (
            <line key={idx} {...line} />
          ))}
        </svg>

        <div className="graph-center" ref={nodeRefs.center}></div>

        <div className="skills-nodes">
          <h3
            ref={nodeRefs.frontend}
            onClick={() => toggleCategory("frontend")}
            className={`skill-node ${activeCategory === "frontend" ? "active" : ""}`}
          >
            Front-End
          </h3>

          <h3
            ref={nodeRefs.backend}
            onClick={() => toggleCategory("backend")}
            className={`skill-node ${activeCategory === "backend" ? "active" : ""}`}
          >
            Back-End
          </h3>

          <h3
            ref={nodeRefs.cloud}
            onClick={() => toggleCategory("cloud")}
            className={`skill-node ${activeCategory === "cloud" ? "active" : ""}`}
          >
            Cloud/Scaling
          </h3>

        </div>
      </div>

      <div className={`skill-details ${activeCategory === "frontend" ? "show" : ""}`}>
        <p>I like to design <strong>versatile</strong> applications, leveraging <strong>mutli-platform</strong> tools allowing applications to reach the widest possible audience without compromising performance or development speed.</p>
        <ul> Some tech I use:
          <li>React Native - Capacitor</li>
          <li>React - Next - Vue</li>
          <li>HTML, CSS</li>
          <li>JavaScript - TypeScript - Swift</li>
          <li>Mocha - Cypress</li>
          <li>Axios - GraphQL</li>
          <li>WordPress</li>
        </ul>
      </div>

      <div className={`skill-details ${activeCategory === "backend" ? "show" : ""}`}>
        <p>I have a passion for building <strong>efficient and secure api</strong> adhering to <strong>RESTful</strong>  principles. I'm most comfortable programming on <strong>Linux (Debian) with NodeJS ecosystem</strong> but I have good experience <strong>Python based</strong> ecos as well (FastAPI-Flask) too.</p>
        <ul> Some tech I use:
          <li>NodeJS (Express) - Fastify - FastAPI</li>
          <li>Server Resource Management (Metrics, PM2, systemd)</li>
          <li>Python - JS - Linux- Bash</li>
          <li>MongoDB - PostgreSQL</li>
          <li>Redis - BullMQ</li>
          <li>Websocket</li>
          <li>CLIP (OpenAI) - Gemma 3 (Google)</li>
          <li>Milus - Typesense</li>
        </ul>
      </div>

      <div className={`skill-details ${activeCategory === "cloud" ? "show" : ""}`}>
        <p>Cloud technologies are a necessity where <strong>performance, scalability and availability</strong> is crucial. I've developed apps through CI/CD pipelines and mutiple cloud technologies to ensure high scalability and efficiency.</p>
        <ul>
          <li>AWS SDKs - GCP - DigitalOcean - OHV Cloud</li>
          <li>Cloud Storage (R2-S3) - CDN (Cloudflare-Akamai)</li>
          <li>Nginx, Load Balancing</li>
          <li>Security (Rate limiting, DDoS mitigation, Virus Scanning...)</li>
          <li>Docker - Kubernetes</li>
        </ul>
        <p className="skill-additional" style={{ margin: "0 115px 0 0 !important" }}>I also like to use and optimize AI/ML models such as <strong>CLIP (OpenAI), Gemma (Google), and Lama (Meta)</strong> and integrate them without relying on certain third-party apis calls to save on cost.</p>
      </div>
    </div>
  );
}

export default Skills;
