import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { ParsedSession } from '../constants/parsedData';
import Activity from '../containers/activity';

export interface SessionProps {
  session?: ParsedSession;
}

const Session: FC<SessionProps> = ({
  session = {
    date: '',
    device: '',
    channel: '',
    activities: [],
  },
}) => (
  <div className="Session">
    <span>{`${session.date} `}</span>
    <span>{`${session.device} `}</span>
    <span>{session.channel}</span>
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      {session.activities.map((activity, i) => (
        <Activity key={i.toString()} activity={activity} />
      ))}
    </Box>
  </div>
);

export default Session;
