import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
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
    <p>{session.device}</p>
    <p>{session.channel}</p>
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      {session.activities.map((activity, i) => (
        <Activity key={i.toString()} activity={activity} />
      ))}
    </Box>
  </div>
);

export default Session;
