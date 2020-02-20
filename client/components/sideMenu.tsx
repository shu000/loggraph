import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, IconButton } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DisplayRuleForms from '../containers/displayRuleForms';

export interface SideMenuProps {
  isOpeningSideMenu?: boolean;
  closeSideMenu?: () => void;
}

const useStyles = makeStyles({
  sideMenu: {
    width: 420,
  },
});

const Header: FC<SideMenuProps> = ({
  isOpeningSideMenu = false,
  closeSideMenu = () => {},
}) => {
  const classes = useStyles();

  return (
    <Drawer variant="persistent" anchor="right" open={isOpeningSideMenu}>
      <div className={classes.sideMenu}>
        <IconButton onClick={closeSideMenu}>
          <ChevronRightIcon />
        </IconButton>
        <DisplayRuleForms />
      </div>
    </Drawer>
  );
};

export default Header;
