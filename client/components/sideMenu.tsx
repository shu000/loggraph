import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SaveIcon from '@material-ui/icons/Save';
import DeleteButton from './deleteButton';
import EditableTitle from '../containers/editableTitle';
import DisplayRuleForms from '../containers/displayRuleForms';
import DisplayRules, { DisplayRule } from '../constants/displayRules';

export interface SideMenuProps {
  selectingCustomerName?: string;
  editingCustomerName?: string;
  rules?: DisplayRules;
  isOpeningSideMenu?: boolean;
  deleteCustomer?: (custonerName: string) => void;
  updateRules?: (
    customerName: string,
    newCustomerName: string,
    rules: DisplayRule[]
  ) => void;
  closeSideMenu?: () => void;
}

const useStyles = makeStyles({
  drawer: {
    // マイナスマージン削除により、X方向のスクロールバーを消すため
    '& .MuiGrid-spacing-xs-1': {
      width: '100%',
      margin: 0,
    },
  },
  container: {
    // サイドメニューの幅
    // 上記 width:'100%' を上書き
    '&.MuiGrid-spacing-xs-1': {
      width: 520,
    },
  },
  whiteSpace: {
    flexGrow: 1,
  },
});

const SideMenu: FC<SideMenuProps> = ({
  selectingCustomerName = '',
  editingCustomerName = '',
  rules = {
    rules: [],
  },
  isOpeningSideMenu = false,
  deleteCustomer = () => {},
  updateRules = () => {},
  closeSideMenu = () => {},
}) => {
  const classes = useStyles();

  const onClickSave = () => {
    updateRules(selectingCustomerName, editingCustomerName, rules.rules);
  };

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={isOpeningSideMenu}
      >
        <Grid container className={classes.container} spacing={1}>
          <Grid item xs={12}>
            <IconButton onClick={closeSideMenu}>
              <ChevronRightIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  // disabled={!localUIState.isAnyFormChanged}
                  startIcon={<SaveIcon />}
                  onClick={onClickSave}
                >
                  変更を保存
                </Button>
              </Grid>
              <Grid item className={classes.whiteSpace} />
              <Grid item xs={3}>
                <DeleteButton
                  target={selectingCustomerName}
                  onDelete={deleteCustomer}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <EditableTitle />
          </Grid>
          <Grid item xs={12}>
            <DisplayRuleForms />
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default SideMenu;
