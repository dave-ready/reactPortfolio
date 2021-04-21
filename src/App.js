import React from "react";
import { Route } from "react-router-dom"; 
import CssBaseline from '@material-ui/core/CssBaseline';
import "./App.css";
import Home from './Components/Index';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
    <>
  <CssBaseline />
  <Route exact path="/portfolio" component={Home} />
  <Route path="/project" component={Project} />
  <Route path="/contact" component={Contact} />
   </> 
  );
}

export default App;


   //
   //
