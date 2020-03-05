import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './containers/header';
import Graph from './containers/graph';
import Legends from './containers/legends';
import SideMenu from './containers/sideMenu';
import Feedback from './containers/feedback';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Grid container>
        <Grid item xs={10}>
          <Graph />
        </Grid>
        <Grid item xs={2}>
          <Legends />
        </Grid>
      </Grid>
      <SideMenu />
      <Feedback />
    </div>
  );
};

export default App;
