import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Slide, Fade, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import JsonReader from './containers/jsonReader';
import Graph from './containers/graph';
import CustomersForm from './containers/customersForm';
import DisplayRuleForms from './containers/displayRuleForms';
import './App.scss';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeMenu = () => {
    setIsOpen(false);
  };
  const openMenu = () => {
    setIsOpen(true);
  };

  const drawerWidth = 420;

  return (
    <div className="App">
      <Graph />
      <Drawer variant="persistent" anchor="right" open={isOpen}>
        <div style={{ width: '420px' }}>
          <IconButton edge="start" onClick={closeMenu}>
            <ChevronRightIcon />
          </IconButton>
          <JsonReader />
          <CustomersForm />
          <DisplayRuleForms />
        </div>
      </Drawer>
      <IconButton edge="start" onClick={openMenu}>
        <ChevronLeftIcon />
      </IconButton>
    </div>
  );
};

export default App;
