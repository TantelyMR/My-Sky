import React from 'react';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import Root from './Root';

import Home from '../Sections/Home';
import About from '../Sections/About';
import Projects from '../Sections/Projects';
import Skills from '../Sections/Skills';

//import './App.css';
//import './Styles.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = '/' element= { <Root/> } >
    <Route index element = {<Home />}/>
    <Route path = "about" element = {<About />}/>
    <Route path = "projects" element = {<Projects />}/>
    <Route path = "skills" element = {<Skills />}/>
  </Route>
  )
);


function App() {
  return (
    <RouterProvider router = {router} />
  );
}

export default App;
