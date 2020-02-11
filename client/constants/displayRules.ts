export default interface DisplayRules {
  customerName: string;
  rules: DisplayRule[];
}

export interface DisplayRule {
  pattern: string;
  title: string;
  text: string;
  backgroundColor: string;
  matching: 'match' | 'startsWith' | 'includes';
}
