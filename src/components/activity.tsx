import React, { FC } from 'react';
import { ParsedActivity } from '../constants/parsedData';

export interface ActivityProps {
  activity?: ParsedActivity;
}

const Activity: FC<ActivityProps> = ({
  activity = {
    time: '',
    pageTitle: '',
    pageURL: '',
  },
}) => (
  <div className="Activity">
    <span>{`${activity.pageURL} `}</span>
  </div>
);

export default Activity;
