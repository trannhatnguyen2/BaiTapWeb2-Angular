import { IBpi } from './bpi';
import { ITime } from './time';

export interface ICoindesk {
  time: ITime;
  disclaimer: string;
  chartName: string;
  bpi: IBpi;
}
