import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Legend from '../containers/legend';
import Util from '../util/util';

export interface LegendsProps {
  rulesCount?: number;
}

const useStyles = makeStyles({
  legends: {
    padding: '10px',
  },
});

const Legends: FC<LegendsProps> = ({ rulesCount = 0 }) => {
  const classes = useStyles();

  return (
    <div className={classes.legends}>
      {Util.range(rulesCount).map(i => (
        <Legend key={i.toString()} index={i} />
      ))}
    </div>
  );
};

export default Legends;
