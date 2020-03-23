import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import DisplayRules, { DisplayRule } from '../constants/displayRules';
import Util from '../util/util';

export interface DisplayRuleFormProps {
  index?: number;
  rules?: DisplayRules;
  onChange?: (index: number, rule: DisplayRule) => void;
}

const useStyles = makeStyles({
  radio: {
    padding: '0 5px',
  },
  backgroundColorField: (props: DisplayRule) => ({
    backgroundColor: props.backgroundColor,
    '& input': {
      color: Util.seeableColor(props.backgroundColor),
    },
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
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item xs={3}>
        <TextField
          name="pattern"
          type="text"
          fullWidth
          value={rule.pattern}
          onChange={event => {
            onChange(index, { ...rule, pattern: event.target.value });
          }}
        />
      </Grid>
      <Grid item xs={2} container justify="center" alignItems="center">
        <Grid item>
          <Radio
            className={classes.radio}
            name="matching"
            checked={rule.matching === 'match'}
            onChange={() => {
              onChange(index, { ...rule, matching: 'match' });
            }}
          />
        </Grid>
        <Grid item>
          <Radio
            className={classes.radio}
            name="matching"
            checked={rule.matching === 'startsWith'}
            onChange={() => {
              onChange(index, { ...rule, matching: 'startsWith' });
            }}
          />
        </Grid>
        <Grid item>
          <Radio
            className={classes.radio}
            name="matching"
            checked={rule.matching === 'includes'}
            onChange={() => {
              onChange(index, { ...rule, matching: 'includes' });
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          name="title"
          type="text"
          value={rule.title}
          onChange={event => {
            onChange(index, { ...rule, title: event.target.value });
          }}
        />
      </Grid>
      <Grid item xs={1}>
        <TextField
          name="text"
          type="text"
          fullWidth
          value={rule.text}
          onChange={event => {
            onChange(index, { ...rule, text: event.target.value });
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          className={classes.backgroundColorField}
          name="backgroundColor"
          type="text"
          fullWidth
          value={rule.backgroundColor}
          onChange={event => {
            onChange(index, { ...rule, backgroundColor: event.target.value });
          }}
        />
      </Grid>
    </Grid>
  );
};

export default DisplayRuleForm;
