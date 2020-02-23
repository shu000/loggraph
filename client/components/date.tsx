import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import { ParsedDate } from '../constants/parsedData';
import Session from './session';

export interface DateProps {
  date?: ParsedDate;
}

const Date: FC<DateProps> = ({
  date = {
    date: '',
    sessions: [],
  },
}) => (
  <div className="Session">
    <h6>{date.date}</h6>
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      {date.sessions.map((session, i) => (
        <Session key={i.toString()} session={session} />
      ))}
    </Box>
  </div>
);

export default Date;
