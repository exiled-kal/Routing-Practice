import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import PageOne from './component/PageOne';
import PageTwo from './component/PageTwo';
import Hello from './component/Hello';
import Color from './component/Color';


function App() {
  return (
    <div className="App">
      <Router>
      <PageOne path='/home'/>
      <PageTwo path='/:id'/>
      <Hello path="/hello/:word" />
      <Color path="/:word/:text/:bgcolor" />
      </Router>
    </div>
  );
}


export default App;
