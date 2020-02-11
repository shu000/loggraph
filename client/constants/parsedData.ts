export default interface ParsedData {
  sessions: ParsedSession[];
}

export interface ParsedSession {
  date: string;
  device: string;
  channel: string;
  activities: ParsedActivity[];
}

export interface ParsedActivity {
  time: string;
  pageTitle: string;
  pageURL: string;
}
