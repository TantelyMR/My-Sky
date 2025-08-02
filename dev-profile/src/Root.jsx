import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSky } from './SkyContext';
import SplashScreen from './SplashScreen';
import StarButton from './assets/icons/favorite-icon.svg?react';
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
            {rainActive ? <StarButton /> : '☂️'}
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