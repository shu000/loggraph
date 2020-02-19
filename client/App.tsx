import React from 'react';
import Grid from '@material-ui/core/Grid';

import JsonReader from './containers/jsonReader';
import Graph from './containers/graph';
import CustomersForm from './containers/customersForm';
import DisplayRuleForms from './containers/displayRuleForms';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item md={7} lg={8}>
          <Graph />
        </Grid>
        <Grid item md={5} lg={4}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <JsonReader />
            </Grid>
            <Grid item>
              <CustomersForm />
            </Grid>
            <Grid item>
              <DisplayRuleForms />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
