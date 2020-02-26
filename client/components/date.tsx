import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { ParsedDate } from '../constants/parsedData';
import Session from './session';

export interface DateProps {
  date?: ParsedDate;
}

const Date: FC<DateProps> = ({
  date = {
    date: '',
    predictedDevice: '',
    sessions: [],
  },
}) => (
  <div className="Session">
    <Typography variant="h5">{`${date.date} ${date.predictedDevice}`}</Typography>
    <Box display="flex" flexDirection="column">
      {date.sessions.map((session, i) => (
        <Session key={i.toString()} session={session} />
      ))}
    </Box>
  </div>
);

export default Date;
