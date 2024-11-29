import { StringOrNull } from './types';

export interface ICondition {
  group_alias: string;
  title: string;
  action_id: number;
  main_img: string;
  svg_img: StringOrNull;
  gift_num: string;
  text: string;
  status: number;
  img_source_json: StringOrNull;
}

export type Conditions = ICondition[];
