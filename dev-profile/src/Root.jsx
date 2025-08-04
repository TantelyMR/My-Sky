import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSky } from './SkyContext';
import SplashScreen from './SplashScreen';
import StarButton from './assets/icons/favorite-icon.svg?react';
import UmbrellaButton from './assets/icons/umbrella-icon.svg?react'
import './rain.css';

function Root() {
  const { mediaMessage, serverMessage, setMediaMessage, setServerMessage } = useSky();
  const [showSplash, setShowSplash] = useState(true);
  const [rainActive, setRainActive] = useState(true);
  const rainTimeoutRef = useRef(null);
  const myspaceRef = useRef(null);

  const makeItRain = () => {
    const front = myspaceRef.current?.querySelector('.rain.front-row');
    const back = myspaceRef.current?.querySelector('.rain.back-row');
    if (!front || !back) return;

    front.innerHTML = '';
    back.innerHTML = '';

    let increment = 0;
    while (increment < 100) {
      const randoHundo = Math.floor(Math.random() * 98) + 1;
      const randoFiver = Math.floor(Math.random() * 4) + 2;
      increment += randoFiver;

      const drop = document.createElement('div');
      drop.className = 'drop';
      drop.style.left = `${increment}%`;
      drop.style.bottom = `${randoFiver + randoFiver - 1 + 100}%`;
      drop.style.animationDelay = `0.${randoHundo}s`;
      drop.style.animationDuration = `4.${randoHundo}s`;

      const stem = document.createElement('div');
      stem.className = 'stem';
      stem.style.animationDelay = `0.${randoHundo}s`;
      stem.style.animationDuration = `4.${randoHundo}s`;

      const splat = document.createElement('div');
      splat.className = 'splat';
      splat.style.animationDelay = `0.${randoHundo}s`;
      splat.style.animationDuration = `4.${randoHundo}s`;

      drop.appendChild(stem);
      drop.appendChild(splat);

      const dropBack = drop.cloneNode(true);

      front.appendChild(drop);
      back.appendChild(dropBack);
    }
  };

  // Splash logic unchanged
  useEffect(() => {
    document.body.classList.add('splash-background');
    const splashTimeout = setTimeout(() => {
      document.body.classList.remove('splash-background');
      setShowSplash(false);
    }, 2100);

    return () => clearTimeout(splashTimeout);
  }, []);

  // Rain animation logic
  useEffect(() => {
    if (rainActive && !showSplash) {
      makeItRain();
      // Clear any previous timeout
      if (rainTimeoutRef.current) clearTimeout(rainTimeoutRef.current);
      // Stop rain after 1.2 minutes (72 seconds)
      rainTimeoutRef.current = setTimeout(() => {
        setRainActive(false);
      }, 72000);
    } else {
      // Clear rain drops
      const front = myspaceRef.current?.querySelector('.rain.front-row');
      const back = myspaceRef.current?.querySelector('.rain.back-row');
      if (front) front.innerHTML = '';
      if (back) back.innerHTML = '';
      // Clear timer
      if (rainTimeoutRef.current) {
        clearTimeout(rainTimeoutRef.current);
        rainTimeoutRef.current = null;
      }
    }
    // Cleanup on unmount
    return () => {
      if (rainTimeoutRef.current) {
        clearTimeout(rainTimeoutRef.current);
        rainTimeoutRef.current = null;
      }
    };
  }, [rainActive, showSplash]);

  return (
    <>
      <Helmet>
        {/* General SEO */}
        <title>Tantely Matthieu R. – Full-Stack Software Architect</title>
        <meta
          name="description"
          content="Tantely's Portfolio, a full-stack software architect and engineer. Explore projects, APIs, and expertise across scalable web systems, media processing, and real-time applications."
        />
        <meta name="author" content="Tantely Matthieu Rabemananjara" />
        <meta name="keywords" content="Tantely, Matthieu, software architect, full stack, React, Node.js, portfolio, backend, frontend, Rabemananjara, web developer, PWA, API, media, chat, scalable systems, MongoDB, Redis, Typesense" />

        {/* Open Graph (for social media previews) */}
        <meta property="og:title" content="Tantely Matthieu Rabemananjara – Full-Stack Engineer" />
        <meta
          property="og:description"
          content="Explore my projects and expertise in scalable backend systems, secure frontends, and cloud-native deployments."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tantelymr.netlify.app/" />
        <meta property="og:image" content="https://tantelymr.netlify.app/preview.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tantely Matthieu Rabemananjara – Software Architect" />
        <meta
          name="twitter:description"
          content="My personal portfolio featuring projects like Rebelle Skies, Media Qualifier API, and real-time chat systems."
        />
        <meta name="twitter:image" content="https://tantelymr.netlify.app/preview.png" />

        {/* PWA/iOS enhancements (already in index.html, but duplicating here doesn't hurt) */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/33S2.png" />
      </Helmet>
      <div id="splash-wrapper">
        <SplashScreen />
      </div>

      <div id="banner-note-container">
        {serverMessage && (
          <span className="banner-note alert" onClick={() => setServerMessage('')}>
            {serverMessage}
          </span>
        )}
        {mediaMessage && (
          <span className="banner-note" onClick={() => setMediaMessage('')}>
            {mediaMessage}
          </span>
        )}
      </div>

      <div
        id="myspace"
        ref={myspaceRef}
        className="back-row-toggle"
        style={{
          visibility: showSplash ? 'hidden' : 'visible',
        }}
      >
        <div className="rain front-row"></div>
        <div className="rain back-row"></div>
        <div className="toggles">
          <div
            className={`toggle ${rainActive ? 'active' : ''}`}
            onClick={() => setRainActive(!rainActive)}
            title={rainActive ? "Rain is active" : "Start rain"}
          >
            {rainActive ? <StarButton /> : <UmbrellaButton />}
          </div>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Root;