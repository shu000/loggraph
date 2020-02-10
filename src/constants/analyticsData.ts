export default interface AnalyticsData {
  dates: AnalyticsDate[];
}

export interface AnalyticsDate {
  date: string;
  hasGoal: boolean;
  hasRevenue: boolean;
  sessionCount: number;
  sessions: AnalyticsSession[];
}

export interface AnalyticsSession {
  duration: string;
  deviceCategory: string;
  channel: string;
  activitySummary: any; // { GOAL: 1, PAGEVIEW: 7 }
  activities: AnalyticsActivity[];
}

export interface AnalyticsActivity {
  time: string;
  type: string;
  repeatActivityTimes: any; // []
  details: {
    ページのタイトル: string[];
    'ページの URL': string[];
  }[];
  pageTitle: string;
}
