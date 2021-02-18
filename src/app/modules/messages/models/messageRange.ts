
export interface MessageRange {
  value: string;
  viewValue: string;
}

export const ranges: MessageRange[] = [
  { value: 'range_all', viewValue: 'All' },
  { value: 'range1', viewValue: 'Last week' },
  { value: 'range2', viewValue: 'Last fortnight' },
  { value: 'range3', viewValue: 'Last 3 weeks' },
  { value: 'range4', viewValue: 'Four weeks' },
  { value: 'range_custom', viewValue: 'Custom' },
];

