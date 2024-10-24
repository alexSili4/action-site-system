export interface ICondition {
  group_alias: string;
  title: string;
  action_id: number;
  main_img: string;
  svg_img: string | null;
  gift_num: string;
  text: string;
  status: number;
  img_source_json: string | null;
}

export type Conditions = ICondition[];
