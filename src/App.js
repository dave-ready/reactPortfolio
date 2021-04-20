import React from "react";
import { BrowserRouter as Route } from "react-router-dom"; 
import CssBaseline from '@material-ui/core/CssBaseline';
import "./App.css";
import Home from './Components/Index';
//import Resume from './Components/Resume';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
    <>
  <CssBaseline />
  <Route exact path="/" component={Home} />
  <Route path="/Project" component={Project} />
  <Route path="/Contact" component={Contact} />
   </> 
  );
}

export default App;


   //
   //
