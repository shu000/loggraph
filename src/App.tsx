import React from 'react';

import JsonReader from './containers/jsonReader';
import Graph from './containers/graph';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <JsonReader />
      <Graph />
    </div>
  );
};

export default App;
