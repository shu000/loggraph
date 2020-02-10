export default interface Template {
  customerName: string;
  styles: Style[];
}

export interface Style {
  pattern: string;
  title: string;
  text: string;
  backgroundColor: string;
  matching: 'match' | 'startsWith' | 'includes';
}
