import { Routes, Route, useLocation } from 'react-router-dom';
import Root from './Root';
import Home from './Sections/Home';

import './App.css'

function AppRoutes() {
  const location = useLocation();
  const state = location.state;
  const backgroundLocation = state && state.backgroundLocation;

  return (
    <Routes location={backgroundLocation || location}>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes;