import React from 'react';
import { HashRouter } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Layout/>
      </div>
    </HashRouter>
  );
}

export default App;
