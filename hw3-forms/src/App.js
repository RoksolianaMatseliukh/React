import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";

import './App.css';
import SearchedFormById from "./components/searched-form-by-id/SearchedFormById";
import SearchedFormByName from "./components/searched-form-by-name/SearchedFormByName";
import SearchedFormWithSelect from "./components/searched-form-with-select/SearchedFormWithSelect";


function App() {
  return (
      <div>
          <h2 className='hintView'> find a user and click on the result - to find out full information </h2>

          <Router>
            <Switch>
              <Route path='/'>
                  <div className='formsView'>
                      <SearchedFormWithSelect/>
                      <SearchedFormById/>
                      <SearchedFormByName/>
                  </div>
              </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
