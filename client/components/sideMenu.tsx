import React, { FC, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import DeleteButton from './deleteButton';
import DisplayRuleForms from '../containers/displayRuleForms';

export interface SideMenuProps {
  selectingCustomerName?: string;
  isOpeningSideMenu?: boolean;
  deleteCustomer?: (custonerName: string) => void;
  closeSideMenu?: () => void;
}

interface SideMenuUIState {
  isAnyFormChanged: boolean;
  isEditingCustomerName: boolean;
  isOpeningDeleteDialog: boolean;
  editingCustomerName: string;
}

const useStyles = makeStyles({
  drawer: {
    // マイナスマージン削除により、X方向のスクロールバーを消すため
    '& .MuiGrid-spacing-xs-1': {
      width: '100%',
      margin: 0,
    },
  },
});

const SideMenu: FC<SideMenuProps> = ({
  selectingCustomerName = '',
  isOpeningSideMenu = false,
  deleteCustomer = () => {},
  closeSideMenu = () => {},
}) => {
  const classes = useStyles();

  const [localUIState, setLocalUIState] = useState<SideMenuUIState>({
    isAnyFormChanged: false, // どこかのフォームが変更されてたら保存ボタンを有効にする
    isEditingCustomerName: false,
    isOpeningDeleteDialog: false,
    editingCustomerName: selectingCustomerName,
  });

  useEffect(() => {
    setLocalUIState({
      ...localUIState,
      isEditingCustomerName: false,
      editingCustomerName: selectingCustomerName,
    });
  }, [selectingCustomerName]);

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={isOpeningSideMenu}
      >
        <Grid container spacing={1} style={{ width: 520 }}>
          <Grid item xs={12}>
            <IconButton onClick={closeSideMenu}>
              <ChevronRightIcon />
            </IconButton>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              disabled={!localUIState.isAnyFormChanged}
              startIcon={<SaveIcon />}
            >
              変更を保存
            </Button>
          </Grid>
          <Grid item xs={5} />
          <Grid item xs={3}>
            <DeleteButton
              target={selectingCustomerName}
              onDelete={deleteCustomer}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={1}>
              <Grid item xs={8}>
                <TextField
                  name="customerName"
                  type="text"
                  fullWidth
                  disabled={!localUIState.isEditingCustomerName}
                  autoFocus
                  value={localUIState.editingCustomerName}
                  onChange={event => {
                    setLocalUIState({
                      ...localUIState,
                      editingCustomerName: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  color={
                    localUIState.isEditingCustomerName ? 'primary' : 'default'
                  }
                  onClick={() => {
                    setLocalUIState({
                      ...localUIState,
                      isEditingCustomerName: !localUIState.isEditingCustomerName,
                    });
                  }}
                >
                  <EditIcon />
                </IconButton>
              </Grid>
            </Grid>
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
