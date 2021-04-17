import React from "react";
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import "./App.css";
import Home from './Components/Index';
import Resume from './Components/Resume';

function App() {
  return (
    <>
  <CssBaseline />
  <Route exact path="/" component={Home} />
  <Route path="/Resume" component={Resume} />
   </> 
  );
}

export default App;


   //
   //
