export interface ICondition {
  id: number;
  group_alias: string;
  title: string;
  action_id: number;
  main_img: string;
  svg_img: string | null;
  gift_num: string;
  text: string;
  status: number;
  // TODO img_source_json: string|null;
  img_source_json: string;
}

export type Conditions = ICondition[];
