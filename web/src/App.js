import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Index from './components/Index';
import SearchRoom from './components/SearchRoom';
import EnlistRoom from './components/EnlistRoom';
import ResultRoom from './components/ResultRoom';

const App = () => {
  return (
    <Router style={{padding: 0, margin: 0}}>
      <Route path="/" exact component={Index} />
      <Route path="/index.html" component={Index} />
      <Route path="/search" component={SearchRoom} />
      <Route path="/enlist" component={EnlistRoom} />
      <Route path="/result" component={ResultRoom} />
    </Router>
  );
};

export default App;
