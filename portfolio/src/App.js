import React from "react";
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import "./App.css";
import Home from './Components/Index';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <>
  <CssBaseline />
  <Route exact path="/" component={Home} />
  <Route path="/Resume" component={Resume} />
  <Route path="/Portfolio" component={Portfolio} />
   </> 
  );
}

export default App;


   //
   //
