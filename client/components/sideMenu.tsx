import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
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
    isAnyFormChanged: false,
    isEditingCustomerName: false,
    isOpeningDeleteDialog: false,
  });

  const DeleteDialog = (() => {
    const handleClose = () => {
      setLocalUIState({
        ...localUIState,
        isOpeningDeleteDialog: false,
      });
    };

    const handleDelete = () => {
      handleClose();
      deleteCustomer(selectingCustomerName);
    };

    return (
      <Dialog open={localUIState.isOpeningDeleteDialog} onClose={handleClose}>
        <DialogTitle>「{selectingCustomerName}」を削除します</DialogTitle>
        <DialogContent>
          <DialogContentText>
            本当に削除してよろしいですか？一度削除すると戻すことはできません。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            キャンセル
          </Button>
          <Button color="secondary" onClick={handleDelete}>
            削除する
          </Button>
        </DialogActions>
      </Dialog>
    );
  })();

  return (
    <>
      {DeleteDialog}
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
          <Grid item xs={11}>
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
          <Grid item xs={12}>
            <Grid container justify="center" spacing={1}>
              <Grid item xs={8}>
                <TextField
                  name="customerName"
                  type="text"
                  fullWidth
                  disabled={!localUIState.isEditingCustomerName}
                  autoFocus
                  /*
              value={editingCustomerName}
              onChange={event => {
                setEditingCustomerName(event.target.value);
              }}
              */
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
              <Grid item xs={1}>
                <IconButton
                  onClick={() => {
                    setLocalUIState({
                      ...localUIState,
                      isOpeningDeleteDialog: true,
                    });
                  }}
                >
                  <DeleteForeverIcon />
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
