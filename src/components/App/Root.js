import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Structure/Header';
import Footer from '../Structure/Footer';

  function Root() {
    return (
      <>
      <Header/>
      <main><Outlet/></main>
      <Footer/>
      </>
    )
  }

export default Root; 