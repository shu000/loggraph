import React from 'react';
import Header from './containers/header';
import Graph from './containers/graph';
import SideMenu from './containers/sideMenu';
import Feedback from './containers/feedback';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Graph />
      <SideMenu />
      <Feedback />
    </div>
  );
};

export default App;
