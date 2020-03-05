import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DisplayRules, { DisplayRule } from '../constants/displayRules';
import Util from '../util/util';

export interface LegendProps {
  index?: number;
  rules?: DisplayRules;
}

const useStyles = makeStyles({
  legend: (props: DisplayRule) => ({
    marginBottom: '5px',
    padding: '5px',
    backgroundColor: props.backgroundColor,
    color: Util.seeableColor(props.backgroundColor),
  }),
});

const Legend: FC<LegendProps> = ({
  index = 0,
  rules = {
    customerName: '',
    rules: [],
  },
}) => {
  if (rules.rules.length === 0 || index >= rules.rules.length) return <div />;

  const rule = rules.rules[index];
  const classes = useStyles(rule);

  return (
    <div className={classes.legend}>
      <Typography variant="body1" align="center">
        {rule.title}
      </Typography>
    </div>
  );
};

export default Legend;
