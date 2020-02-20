import React from 'react';
import Header from './containers/header';
import Graph from './containers/graph';
import SideMenu from './containers/sideMenu';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Graph />
      <SideMenu />
    </div>
  );
};

export default App;
