import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MenuIcon from '@material-ui/icons/Menu';
import CustomersForm from '../containers/customersForm';

export interface HeaderProps {
  isOpeningSideMenu?: boolean;
  openSideMenu?: () => void;
  addCustomer: (customerName: string) => void;
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
  dialog: {
    // 「新しいルールを追加」ダイアログを上寄せする
    '& .MuiDialog-container': {
      'align-items': 'start',
    },
  },
});

const Header: FC<HeaderProps> = ({
  isOpeningSideMenu = false,
  openSideMenu = () => {},
  addCustomer = () => {},
}) => {
  const classes = useStyles();

  const [newCustomerName, setNewCustomerName] = useState('');
  const [isOpeningNewCustomerDialog, setIsOpeningNewCustomerDialog] = useState(
    false
  );

  const openNewCustomerDialog = () => {
    setIsOpeningNewCustomerDialog(true);
  };

  const NewCustomerDialog = (() => {
    const handleClose = () => {
      setIsOpeningNewCustomerDialog(false);
    };

    const handleAdd = () => {
      handleClose();
      if (newCustomerName !== '') addCustomer(newCustomerName);
    };

    return (
      <Dialog
        className={classes.dialog}
        open={isOpeningNewCustomerDialog}
        onClose={handleClose}
      >
        <DialogTitle>新しいルールを追加</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="新しいルールの名称"
            type="text"
            fullWidth
            onChange={e => {
              setNewCustomerName(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button color="default" onClick={handleClose}>
            キャンセル
          </Button>
          <Button color="primary" onClick={handleAdd}>
            追加する
          </Button>
        </DialogActions>
      </Dialog>
    );
  })();

  return (
    <>
      {NewCustomerDialog}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">ユーザ行動フロー表示ツール</Typography>
          <div className={classes.customers}>
            <CustomersForm />
          </div>
          <IconButton
            className={classes.button}
            onClick={openNewCustomerDialog}
          >
            <AddCircleOutlineIcon />
          </IconButton>
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
    </>
  );
};

export default Header;
