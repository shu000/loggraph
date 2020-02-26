import AnalyticsData from '../constants/analyticsData';
import ParsedData from '../constants/parsedData';

// "mm dd, yyyy" => "mm/dd(day)"
const translateDate = (dateString: string): string => {
  const splitted = dateString.replace(',', '').split(' ');
  const year = parseInt(splitted[2], 10);
  const month = parseInt(splitted[0], 10);
  const date = parseInt(splitted[1], 10);
  const day = ['(日)', '(月)', '(火)', '(水)', '(木)', '(金)', '(土)'][
    new Date(year, month, date).getDay()
  ];
  return `${month}/${date}${day}`;
};

const translateChannel = (channel: string): string => {
  switch (channel) {
    case 'Organic Search':
      return '検索';
    case 'Direct':
      return '直接';
    case 'Referral':
      return '参照';
    default:
      return 'その他';
  }
};

const translateDevice = (deviceCategory: string): string => {
  switch (deviceCategory) {
    case 'tablet':
      return 'TB';
    case 'mobile':
      return 'SP';
    default:
      return 'PC';
  }
};

export const parse = (original: AnalyticsData): ParsedData => ({
  dates: original.dates.reverse().map(date => ({
    date: translateDate(date.date),
    // predictedDevice
    // 同日内の最初のセッションのデバイスをdateのデバイスと判断する
    // クロスデバイスでセッション取るのあんまりやってないからそれでいいとのこと
    predictedDevice:
      date.sessions.length === 0
        ? ''
        : translateDevice(date.sessions[0].deviceCategory),
    sessions: date.sessions.map(session => ({
      device: translateDevice(session.deviceCategory),
      channel: translateChannel(session.channel),
      activities: session.activities
        .filter(activity => activity.type !== 'GOAL')
        .map(activity => ({
          time: activity.time,
          pageTitle: activity.details[0]['ページのタイトル'][0],
          pageURL: activity.details[0]['ページの URL'][0],
        })),
    })),
  })),
});
