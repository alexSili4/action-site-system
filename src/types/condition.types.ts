export interface ICondition {
  id: number;
  group_alias: string;
  title: string;
  action_id: number;
  main_img: string;
  svg_img: null;
  gift_num: string;
  text: string;
  status: number;
}

export type Conditions = ICondition[];
