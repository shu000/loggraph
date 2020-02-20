import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, FormGroup, TextField, Radio } from '@material-ui/core';
import DisplayRules, { DisplayRule } from '../constants/displayRules';
import Util from '../util/util';

export interface DisplayRuleFormProps {
  index?: number;
  rules?: DisplayRules;
  onChange?: (index: number, rule: DisplayRule) => void;
}

const useStyles = makeStyles({
  pattern: {
    width: '7rem',
  },
  title: {
    width: '8rem',
  },
  text: {
    width: '3rem',
  },
  backgroundColor: (props: DisplayRule) => ({
    width: '6rem',
    backgroundColor: props.backgroundColor,
    color: Util.seeableColor(props.backgroundColor),
  }),
});

const DisplayRuleForm: FC<DisplayRuleFormProps> = ({
  index = 0,
  rules = {
    customerName: '',
    rules: [],
  },
  onChange = () => {},
}) => {
  if (rules.rules.length === 0 || index >= rules.rules.length)
    return <div className="DisplayRuleForm" />;

  const rule = rules.rules[index];
  const classes = useStyles(rule);

  return (
    <div className="DisplayRuleForm">
      <FormGroup row>
        <TextField
          className={classes.pattern}
          name="pattern"
          type="text"
          value={rule.pattern}
          onChange={event => {
            onChange(index, { ...rule, pattern: event.target.value });
          }}
        />
        <Radio
          name="matching"
          checked={rule.matching === 'match'}
          onChange={() => {
            onChange(index, { ...rule, matching: 'match' });
          }}
        />
        <Radio
          name="matching"
          checked={rule.matching === 'startsWith'}
          onChange={() => {
            onChange(index, { ...rule, matching: 'startsWith' });
          }}
        />
        <Radio
          name="matching"
          checked={rule.matching === 'includes'}
          onChange={() => {
            onChange(index, { ...rule, matching: 'includes' });
          }}
        />
        <TextField
          className={classes.title}
          name="title"
          type="text"
          value={rule.title}
          onChange={event => {
            onChange(index, { ...rule, title: event.target.value });
          }}
        />
        <TextField
          className={classes.text}
          name="text"
          type="text"
          value={rule.text}
          onChange={event => {
            onChange(index, { ...rule, text: event.target.value });
          }}
        />
        <TextField
          className={classes.backgroundColor}
          name="backgroundColor"
          type="text"
          value={rule.backgroundColor}
          onChange={event => {
            onChange(index, { ...rule, backgroundColor: event.target.value });
          }}
        />
      </FormGroup>
    </div>
  );
};

export default DisplayRuleForm;
