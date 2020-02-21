import React, { FC } from 'react';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

export interface FeedbackProps {
  open?: boolean;
  isSucceed?: boolean;
  message?: string;
  onClose?: () => void;
}

const Feedback: FC<FeedbackProps> = ({
  open = false,
  isSucceed = true,
  message = '',
  onClose = () => {},
}) => {
  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      autoHideDuration={2000}
      onClose={onClose}
    >
      <Alert severity={isSucceed ? 'success' : 'error'}>{message}</Alert>
    </Snackbar>
  );
};

export default Feedback;
