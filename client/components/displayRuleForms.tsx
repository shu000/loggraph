import React, { FC, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, IconButton } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DisplayRuleForm from '../containers/displayRuleForm';
import Util from '../util/util';

export interface DisplayRuleFormsProps {
  selectingCustomerName?: string;
  rulesCount?: number;
  fetchRules?: (customerName: string) => void;
}

/*
const useStyles = makeStyles({
  displayRuleForms: {
  }
});
*/

const DisplayRuleForms: FC<DisplayRuleFormsProps> = ({
  selectingCustomerName = '',
  rulesCount = 0,
  fetchRules = () => {},
}) => {
  const [editingCustomerName, setEditingCustomerName] = useState(
    selectingCustomerName
  );

  useEffect(() => {
    setEditingCustomerName(selectingCustomerName);
    if (selectingCustomerName !== '') fetchRules(selectingCustomerName);
  }, [selectingCustomerName]);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <TextField
        name="customerName"
        type="text"
        value={editingCustomerName}
        onChange={event => {
          setEditingCustomerName(event.target.value);
        }}
      />
      <IconButton>
        <EditIcon />
      </IconButton>
      <IconButton>
        <DeleteForeverIcon />
      </IconButton>
      <div className="DisplayRuleForms">
        {Util.range(rulesCount).map(i => (
          // TODO: range(i + 1) new line
          <DisplayRuleForm key={i.toString()} index={i} />
        ))}
      </div>
    </>
  );
};

export default DisplayRuleForms;
