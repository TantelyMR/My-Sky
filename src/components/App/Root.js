import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Structure/Header';
import Footer from '../Structure/Footer';

  function Root() {
    return (
      <div id="page">
      <Header/>
      <main><Outlet/></main>
      <Footer/>
      </div>
    )
  }

export default Root; 