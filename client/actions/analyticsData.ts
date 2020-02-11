import AnalyticsData from '../constants/analyticsData';

export const ON_READ = 'ON_READ';

export const onRead = (data: AnalyticsData) => ({
  type: ON_READ as typeof ON_READ,
  payload: {
    data,
  },
});

export type AnalyticsDataAction = ReturnType<typeof onRead>;
