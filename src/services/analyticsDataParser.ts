import AnalyticsData, {
  AnalyticsSession,
  AnalyticsActivity,
} from '../constants/analyticsData';
import ParsedData, {
  ParsedSession,
  ParsedActivity,
} from '../constants/parsedData';

/**
 * "mm dd, yyyy" => "mm/dd(day)"
 * @param  {String} dateString "mm dd, yyyy"
 * @return {String}            "mm/dd(day)"
 */
const parseDateString = (dateString: string): string => {
  const splitted = dateString.replace(',', '').split(' ');
  const year = parseInt(splitted[2], 10);
  const month = parseInt(splitted[0], 10);
  const date = parseInt(splitted[1], 10);
  const day = ['(日)', '(月)', '(火)', '(水)', '(木)', '(金)', '(土)'][
    new Date(year, month, date).getDay()
  ];
  return `${month}/${date}${day}`;
};

const transferChannel = (channel: string): string => {
  switch (channel) {
    case 'Organic Search':
      return '検索';
    case 'Direct':
      return '直接訪問';
    case 'Referral':
      return '参照';
    default:
      return 'その他';
  }
};
const transferDevice = (deviceCategory: string): string => {
  switch (deviceCategory) {
    case 'tablet':
      return 'TB';
    case 'mobile':
      return 'SP';
    default:
      return 'PC';
  }
};
const parseSession = (
  dateString: string,
  session: AnalyticsSession
): ParsedSession => {
  return {
    date: dateString,
    device: transferDevice(session.deviceCategory),
    channel: transferChannel(session.channel),
    activities: [],
  };
};

const parseActivity = (activity: AnalyticsActivity): ParsedActivity => {
  return {
    time: activity.time,
    // Note: details が常に length === 1 なのか不明
    pageTitle: activity.details[0]['ページのタイトル'][0],
    pageURL: activity.details[0]['ページの URL'][0],
  };
};

export const parseAnalyticsData = (data: AnalyticsData): ParsedData => {
  console.log(data);
  const parsed: ParsedData = {
    sessions: [],
  };

  const arrowActivity = {
    time: '',
    pageTitle: '',
    pageURL: 'arrow',
  };

  data.dates.forEach(date => {
    // parseSessions
    date.sessions.forEach(session => {
      const dateString = parseDateString(date.date);
      const len = parsed.sessions.length;
      const lastDate = len > 0 ? parsed.sessions[0].date : '';
      if (lastDate === dateString) {
        // 同じ日のセッションなら矢印を入れる
        parsed.sessions[0].activities.unshift(arrowActivity);
      } else {
        // 別の日のセッションなら、パースして格納する
        // デバイスと流入経路はパース済のデータから流用する
        const firstSessionAtTheDate = date.sessions[date.sessions.length - 1];
        parsed.sessions.unshift(
          parseSession(dateString, firstSessionAtTheDate)
        );
      }

      // parseActivities
      session.activities.forEach(activity => {
        // "GOAL" は直後のページが完了ページなので表示しなくて良い
        if (activity.type !== 'PAGEVIEW') return;
        parsed.sessions[0].activities.unshift(parseActivity(activity));
      });
    });
  });

  return parsed;
};
