export default interface ParsedData {
  dates: ParsedDate[];
}

export interface ParsedDate {
  date: string;
  sessions: ParsedSession[];
}

export interface ParsedSession {
  device: string;
  channel: string;
  activities: ParsedActivity[];
}

export interface ParsedActivity {
  time: string;
  pageTitle: string;
  pageURL: string;
}
