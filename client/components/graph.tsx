import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ParsedData from '../constants/parsedData';
import Session from './session';

export interface GraphProps {
  parsed?: ParsedData;
}

const useStyles = makeStyles({
  graph: {
    width: '100%',
    height: '100%',
  },
});

const Graph: FC<GraphProps> = ({ parsed = { sessions: [] } }) => {
  const classes = useStyles();

  return (
    <div className={classes.graph}>
      {parsed.sessions.map((session, i) => (
        <Session key={i.toString()} session={session} />
      ))}
    </div>
  );
};

export default Graph;
