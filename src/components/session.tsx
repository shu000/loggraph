import React, { FC } from 'react';
import { ParsedSession } from '../constants/parsedData';
import Activity from './activity';

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
    <div className="Session__activities">
      {session.activities.map((activity, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Activity key={`${session.date}${index}`} activity={activity} />
      ))}
    </div>
  </div>
);

export default Session;
