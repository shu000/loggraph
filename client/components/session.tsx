import React, { FC } from 'react';
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
    <div className="Session__activities">
      {session.activities.map((activity, i) => (
        <Activity key={i.toString()} activity={activity} />
      ))}
    </div>
  </div>
);

export default Session;
