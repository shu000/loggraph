import React, { FC, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';

export interface EditableTitleProps {
  defaultTitle?: string;
  name?: string;
  onChange?: (changed: string) => {};
}

const useStyles = makeStyles({
  textField: {
    '& input': {
      textAlign: 'center',
    },
  },
});

const EditableTitle: FC<EditableTitleProps> = ({
  defaultTitle = '',
  name = '',
  onChange = () => {},
}) => {
  const [disabled, setDisabled] = useState(true);
  const [editingTitle, setEditingTitle] = useState(defaultTitle);

  useEffect(() => {
    setEditingTitle(defaultTitle);
  }, [defaultTitle]);

  const classes = useStyles();

  const onChangeText = (event: any) => {
    const changed = event.target.value;
    setEditingTitle(changed);
    onChange(changed);
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
          value={editingTitle}
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
