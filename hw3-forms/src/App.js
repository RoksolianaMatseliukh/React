import {BrowserRouter as Router, Switch} from "react-router-dom";
import React from "react";

import './App.css';
import SearchedFormById from "./components/searched-form-by-id/SearchedFormById";
import SearchedFormByName from "./components/searched-form-by-name/SearchedFormByName";
import SearchedFormWithSelect from "./components/searched-form-with-select/SearchedFormWithSelect";


function App() {
  return (
      <Router>
          <Switch>
              <Router path='/'>
                  <div className='formsView'>
                      <SearchedFormWithSelect/>
                      <SearchedFormById/>
                      <SearchedFormByName/>
                  </div>
              </Router>
          </Switch>
      </Router>
  );
}

export default App;
