export interface IconDataProperties {
  icon: string;
  description: string;
  name: string;
  link: string;
}

export interface IconData {
  [x: string]: IconDataProperties;
}
