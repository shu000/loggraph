import React, { FC, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export interface DeleteButtonProps {
  target?: string;
  onDelete?: (target: string) => void;
}

const DeleteButton: FC<DeleteButtonProps> = ({
  target = '',
  onDelete = () => {},
}) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const onClick = () => {
    setIsOpenDialog(true);
  };

  const onClose = () => {
    setIsOpenDialog(false);
  };

  const onConfirm = () => {
    onClose();
    onDelete(target);
  };

  return (
    <>
      <Dialog open={isOpenDialog} onClose={onClose}>
        <DialogTitle>「{target}」を削除します</DialogTitle>
        <DialogContent>
          <DialogContentText>
            本当に削除してよろしいですか？一度削除すると戻すことはできません。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={onClose}>
            キャンセル
          </Button>
          <Button color="secondary" onClick={onConfirm}>
            削除する
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        startIcon={<DeleteForeverIcon />}
        onClick={onClick}
      >
        削除する
      </Button>
    </>
  );
};

export default DeleteButton;
