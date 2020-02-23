import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { ParsedSession } from '../constants/parsedData';
import Activity from '../containers/activity';

export interface SessionProps {
  session?: ParsedSession;
}

const Session: FC<SessionProps> = ({
  session = {
    device: '',
    channel: '',
    activities: [],
  },
}) => (
  <div className="Session">
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="body1">{`（${session.channel}）`}</Typography>
      </Box>
      {session.activities.map((activity, i) => (
        <Activity key={i.toString()} activity={activity} />
      ))}
    </Box>
  </div>
);

export default Session;
