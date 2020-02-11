import React from 'react';

import JsonReader from './containers/jsonReader';
import Graph from './containers/graph';
import DisplayRuleForms from './containers/displayRuleForms';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <JsonReader />
      <Graph />
      <DisplayRuleForms />
    </div>
  );
};

export default App;
