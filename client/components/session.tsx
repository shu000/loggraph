import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { ParsedSession } from '../constants/parsedData';
import Activity from '../containers/activity';

export interface SessionProps {
  session?: ParsedSession;
}

const useStyles = makeStyles({
  channelBox: {
    width: '75px',
    height: '25px',
  },
});

const Session: FC<SessionProps> = ({
  session = {
    device: '',
    channel: '',
    activities: [],
  },
}) => {
  const classes = useStyles();

  return (
    <div className="Session">
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        <Box
          className={classes.channelBox}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="body1">{`（${session.channel}）`}</Typography>
        </Box>
        {session.activities.map((activity, i) => (
          <Activity key={i.toString()} activity={activity} />
        ))}
      </Box>
    </div>
  );
};

export default Session;
