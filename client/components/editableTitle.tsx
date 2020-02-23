import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';

export interface EditableTitleProps {
  editingCustomerName?: string;
  name?: string;
  onEditCustomerName?: (editted: string) => void;
}

const useStyles = makeStyles({
  textField: {
    '& input': {
      textAlign: 'center',
    },
  },
});

const EditableTitle: FC<EditableTitleProps> = ({
  editingCustomerName = '',
  name = '',
  onEditCustomerName = () => {},
}) => {
  const [disabled, setDisabled] = useState(true);

  const classes = useStyles();

  const onChangeText = (event: any) => {
    onEditCustomerName(event.target.value);
  };

  const onClickIcon = () => {
    setDisabled(!disabled);
    // ここで .focus() したいけど setDisabled() と同期させれない。。
  };

  return (
    <Grid container justify="center" spacing={1}>
      <Grid item xs={6}>
        <TextField
          className={classes.textField}
          name={name}
          type="text"
          fullWidth
          disabled={disabled}
          value={editingCustomerName}
          onChange={onChangeText}
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton
          color={disabled ? 'default' : 'primary'}
          onClick={onClickIcon}
        >
          <EditIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default EditableTitle;
