import React from 'react';
import { Route } from "react-router-dom";

import  { HomePage }  from "./components/HomePage"
import { NavBar } from "./components/NavBar"
import { CodingProjects } from "./components/CodingProjects"


function App() {
  return (
    <div>
       <NavBar/>
       <Route exact path = '/' component={HomePage}/>
       <Route path = '/Projects' component={CodingProjects}/>
    </div>
  )
}

export default App;
