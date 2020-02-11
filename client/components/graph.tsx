import React, { FC } from 'react';
import ParsedData from '../constants/parsedData';
import Session from './session';

export interface GraphProps {
  parsed?: ParsedData;
}

const Graph: FC<GraphProps> = ({ parsed = { sessions: [] } }) => (
  <div className="Graph">
    <div className="Graph__sessions">
      {parsed.sessions.map((session, i) => (
        <Session key={i.toString()} session={session} />
      ))}
    </div>
  </div>
);

export default Graph;
