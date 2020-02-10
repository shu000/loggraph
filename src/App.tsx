import React from 'react';

import JsonReader from './containers/jsonReader';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>hello</h1>
      <JsonReader />
    </div>
  );
};

export default App;
