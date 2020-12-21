import React from 'react';
import './App.css';
import UserSubmissionForm from './UserSubmissionForm/UserSubmissionForm';
import Home from './Home/Home';
import SubmitPage from './SubmitPage/SubmitPage';

import { BrowserRouter, Route, Switch } from 'react-router-dom' ;


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
       <Route path="/login" component={UserSubmissionForm} />
       <Route path="/submit" component={SubmitPage} />
       </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
