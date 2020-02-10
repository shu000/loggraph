import React from 'react';

import JsonReader from './containers/jsonReader';
import Graph from './containers/graph';
import DisplayRuleForm from './containers/displayRuleForm';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <JsonReader />
      <Graph />
      <DisplayRuleForm index={0} />
      <DisplayRuleForm index={1} />
    </div>
  );
};

export default App;
