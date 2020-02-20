import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CustomersForm from '../containers/customersForm';

export interface HeaderProps {
  isOpeningSideMenu?: boolean;
  openSideMenu?: () => void;
}

const useStyles = makeStyles({
  customers: {
    paddingLeft: 30,
  },
  space: {
    flexGrow: 1,
  },
  button: {
    color: 'inherit',
  },
});

const Header: FC<HeaderProps> = ({
  isOpeningSideMenu = false,
  openSideMenu = () => {},
}) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">ユーザ行動フロー表示ツール</Typography>
        <div className={classes.customers}>
          <CustomersForm />
        </div>
        <span className={classes.space} />
        <IconButton
          className={classes.button}
          edge="end"
          onClick={openSideMenu}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
