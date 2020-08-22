import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from "./components/Homepage"

import UserRepos from "./components/Userrepos"
function App() {
  return (
   <div>
    <HomePage/>
    
    <Switch>
          <Route path="/rep" component={UserRepos} >
           
        
          </Route>
          
        </Switch>
   
    </div>
  );
}

export default App;
